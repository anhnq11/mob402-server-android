const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

let sinhviens

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))

// Cau hinh HBS
app.engine('hbs', engine({
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
        sum: (a, b) => a + b
    }
}));

app.set('view engine', 'hbs');
app.set("views", "./views");

const mongoose = require('mongoose');
const uri = 'mongodb+srv://anhnq:Ez54bG4e3L1y6hUT@atlascluster.at4sibr.mongodb.net/TestDB?retryWrites=true&w=majority';
const svModel = require('./SinhVienModel');
const { request } = require('express');

// Get List
app.get('/', async (req, res) => {

    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong.'));
    sinhviens = await svModel.find();
    // try {
    //     console.log(sinhviens);
    //     // res.send(sinhviens);
    // } catch (error) {
    //     res.status(500).send(error);
    // }
    res.render('home', {
        sinhviens
    })
})

// Add to List
app.post('/', async (req, res) => {

    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong.'));
    if (req.body._id == null) {
        try {
            svModel.create(req.body)
            res.redirect('/');
        } catch (error) {
            log.error(error);
        }
    }
    else {
        var rs = await svModel.updateOne({ _id: req.body._id }, req.body)
        console.log(rs);
        res.redirect('/')
    }
});

// Update Item
app.get('/update/:id', async (req, res) => {

    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong.'));
    const sinhvien = await svModel.findById(req.params.id);
    res.render('home', {
        sinhvien: sinhvien.toJSON(),
        sinhviens
    })
});

// Delete Item
app.get('/delete/:id', async (req, res) => {

    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong.'));
    const sinhviens = await svModel.findByIdAndDelete(req.params.id, req.body);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const express = require('express')
const app = express()
const port = 3030
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const mongoose = require('mongoose');

const uri = 'mongodb+srv://anhnq:Ez54bG4e3L1y6hUT@atlascluster.at4sibr.mongodb.net/TestDB?retryWrites=true&w=majority';

const svModel = require('./SinhVienModel');

app.get('/sinhvien', async (req, res) => {
    await mongoose.connect(uri).then(console.log('Ket noi DB thanh cong.'));

    const sinhviens = await svModel.find();

    try {
        console.log(sinhviens);
        res.send(sinhviens);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

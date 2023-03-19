const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.set('view engine', 'hbs');
app.set("views", "./views");

// Cấu hình hbs, default layouts
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout:'page2',
    layoutsDir: './views/layouts'
}));

// Render views
app.get('/', (req, res) => {
    res.render('home', {layout: 'main',
    showBody: true,
    showContentTinhToan: false
    });
    // Chỉ định Home chỉ render trong layout Main
    // res.render('home');
});

// Render default layout
app.get('/tinhToan', (req, res) => {
    res.render(
        'defaultView', {
            layout: 'main',
            showBody: false,
            showContentTinhToan: true
        }
    );
});

app.listen(3000);
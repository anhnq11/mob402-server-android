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
    res.render('home');
});

app.listen(3000);
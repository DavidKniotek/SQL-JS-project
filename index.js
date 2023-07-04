const express = require('express');
const methodOverride = require('method-override');
const {engine} = require('express-handlebars');
const {handleError} = require('./utils/errors');
const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(handleError); // In case of using an own middleware to errors handling.

app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers, // Additional modules, which could be useful during work with handlebars.
}));
app.set('view engine', '.hbs'); // Settings for layouts/views engine.



app.get('/', (req, res) => {
    res.redirect('/customers');
});
app.get('/customers', (req, res) => {
    res.render('customers/list');
});



app.listen(3000, 'localhost', () => {
    console.log('Listening...')
});
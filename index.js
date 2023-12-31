const express = require('express');
require('express-async-errors'); // express async errors should always be right after the express import line.
const methodOverride = require('method-override');
const {engine} = require('express-handlebars');
const {handleError} = require('./utils/errors');
const {customerRouter} = require("./routers/customer-router");
const {homeRouter} = require("./routers/home-router");
const {productsRouter} = require("./routers/product-router");
const app = express();
require('./utils/db'); // Enables a db.js file during running the program.

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



app.use('/', homeRouter);
app.use('/customers', customerRouter);
app.use('/products', productsRouter);



app.listen(3000, 'localhost', () => {
    console.log('Listening...')
});
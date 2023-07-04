const {Router} = require('express');
const homeRouter = Router();

homeRouter
        .get('/', (req, res) => {
            res.redirect('/customers');
        });

module.exports = {
    homeRouter,
}
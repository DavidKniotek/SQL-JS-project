const {Router} = require('express');
const customerRouter = Router();

customerRouter
        .get('/', (req, res) => {
            res.render('customers/list');
        });

module.exports = {
    customerRouter,
}
const {Router} = require('express');
const {CustomerRecord} = require("../records/customer.record");
const {ProductRecord} = require("../records/product.record");
const customerRouter = Router();

customerRouter
        .get('/', (req, res) => {

            const customersList = CustomerRecord.listAll();
            const productsList = ProductRecord.listAll()

            res.render('customers/customers-list', {
                customersList,
                productsList,
            });
        });

module.exports = {
    customerRouter,
}
const {Router} = require('express');
const {CustomerRecord} = require("../records/customer.record");
const {ProductRecord} = require("../records/product.record");
const customerRouter = Router();

customerRouter
        .get('/', async (req, res) => {

            const customersList = await CustomerRecord.listAll();
            const productsList = await ProductRecord.listAll()

            res.render('customers/customers-list', {
                customersList,
                productsList,
            });
        })

        .post('/', async (req, res) => {

            const newCustomer = new CustomerRecord(req.body);
            await newCustomer.insert();

            res.redirect('/customers');
        })

module.exports = {
    customerRouter,
}
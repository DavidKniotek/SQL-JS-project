const {Router} = require('express');
const {CustomerRecord} = require("../records/customer.record");
const {ProductRecord} = require("../records/product.record");
const {Customer_ProductRecord} = require("../records/customer_product.record");
const {ValidationError} = require("../utils/errors");
const customerRouter = Router();

customerRouter
        .get('/', async (req, res) => {

            const customersList = await CustomerRecord.listAll();
            const existedCustomersList = await Customer_ProductRecord.listAll();
            const productsList = await ProductRecord.listAll()

            res.render('customers/customers-list', {
                customersList,
                existedCustomersList,
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
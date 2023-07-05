const {Router} = require('express');
const {CustomerRecord} = require("../records/customer.record");
const {ProductRecord} = require("../records/product.record");
const {Customer_ProductRecord} = require("../records/customer_product.record");
const {ValidationError} = require("../utils/errors");
const {pool} = require("../utils/db");
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

        .patch('/products/:customerID', async (req, res) => {

            const customer = await CustomerRecord.getOne(req.params.customerID);
            console.log(customer);

            if (customer === null) {
                throw new ValidationError('Cannot find customer with this ID.')
            }

            const product = req.body.productId === '' ? null : await ProductRecord.getOne(req.body.productId);
            console.log(product);
        })

module.exports = {
    customerRouter,
}
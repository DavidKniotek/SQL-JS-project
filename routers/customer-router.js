const {Router} = require('express');
const {CustomerRecord} = require("../records/customer.record");
const customerRouter = Router();

customerRouter
        .get('/', (req, res) => {

            const customersList = CustomerRecord.listAll();

            res.render('customers/customers-list', {
                customersList,
            });
        });

module.exports = {
    customerRouter,
}
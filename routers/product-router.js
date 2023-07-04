const {Router} = require('express');
const {ProductRecord} = require("../records/product.record");
const productsRouter = Router();

productsRouter
        .get('/', (req, res) => {

            const productsList = ProductRecord.listAll();

            res.render('products/products-list', {
                productsList,
            });
        });

module.exports = {
    productsRouter,
}
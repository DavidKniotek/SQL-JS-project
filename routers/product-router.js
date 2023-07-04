const {Router} = require('express');
const {ProductRecord} = require("../records/product.record");
const {ValidationError} = require("../utils/errors");
const productsRouter = Router();

productsRouter
        .get('/', async (req, res) => {

            const productsList = await ProductRecord.listAll();

            res.render('products/products-list', {
                productsList,
            });
        })

        .post('/', async (req, res) => {
            const data = {
                ...req.body,
                periodInYears: Number(req.body.periodInYears),
            };

            const newProduct = new ProductRecord(data);
            await newProduct.insert();

            res.redirect('/products');
        })

module.exports = {
    productsRouter,
}
const {Router} = require('express');
const {ProductRecord} = require("../records/product.record");
const productsRouter = Router();

productsRouter
        .get('/', async (req, res) => {

            const productsList = await ProductRecord.listAll();

            res.render('products/products-list', {
                productsList,
            });
        })

        .post('/', async (req, res) => {
            console.log(req.body)
            const data = {
                ...req.body,
                periodInYears: Number(req.body.periodInYears),
            };
            console.log(data);

            const newProduct = new ProductRecord(data);
            await newProduct.insert();

            res.redirect('/products');
        })

module.exports = {
    productsRouter,
}
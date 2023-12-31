const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require('uuid');

class ProductRecord {
    constructor(obj) { // Errors validation, which references to handleError middleware.
        if (!obj.productName || obj.productName.length < 3 || obj.productName.length > 30) {
            throw new ValidationError('Product name should contain at least 3 and maximum 30 signs.');
        }

        if (!obj.periodInYears || obj.periodInYears < 1 || obj.periodInYears > 99) {
            throw new ValidationError('Financing period should be at least 1 year, and do not exceed 99 years.');
        }

        this.id = obj.id;
        this.productName = obj.productName; // obj.productName references to input's property "name" in products-list.hbs file.
        this.periodInYears = obj.periodInYears;
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `products` VALUES(:id, :productName, :periodInYears)", {
            id: this.id,
            productName: this.productName,
            periodInYears: this.periodInYears,
        });
        return this.id;
    }
    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `products`");
        return results;
    }

    static async getOne(id) {
        const [result] = await pool.execute("SELECT * FROM `products` WHERE `id` = :id", {
            id,
        });
        return result.length === 0 ? null : result[0];
    }
}

module.exports = {
    ProductRecord,
}
const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require("uuid");

class CustomerRecord {

    constructor(obj) { // Errors validation, which references to handleError middleware.
        if (!obj.fullName || obj.fullName.length < 5 || obj.fullName.length > 50) {
            throw new ValidationError('Customer\'s name should contain at least 5 and maximum 50 signs.');
        }

        this.id = obj.id;
        this.fullName = obj.fullName; // obj.fullName references to input's property "name" in customers-list.hbs file.
    }

    async update() {
        await pool.execute("UPDATE `customers` SET `fullName` = :fullName, `productId` = :productId WHERE `id` = :id ", {
            id: this.id,
            fullName: this.fullName,
            productId: this.productId,
        });
    }
    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `customers` ORDER BY `fullName` ASC");
        return results;
    }

    static async getOne(id) {
        const [result] = await pool.execute("SELECT * FROM `customers` WHERE `id` = :id", {
            id,
        });
        return result.length === 0 ? null : new CustomerRecord(result[0]);
    }
}

module.exports = {
    CustomerRecord,
}
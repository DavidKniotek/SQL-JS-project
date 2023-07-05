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

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `customers`(`id`, `fullName`) VALUES(:id, :fullName)", {
            id: this.id,
            fullName: this.fullName,
        });
        return this.id;
    }
    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `customers` ORDER BY `fullName` ASC");
        return results;
    }
}

module.exports = {
    CustomerRecord,
}
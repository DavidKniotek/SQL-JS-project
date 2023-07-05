const {pool} = require("../utils/db");

class Customer_ProductRecord {
    static async listAll() {
        const [results] = await pool.execute("SELECT `customerId`, `productName` FROM `customers_products`");
        return results;
    }
};

module.exports = {
    Customer_ProductRecord,
}
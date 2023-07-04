class CustomerRecord {
    static listAll() {
        return [
            {
                id: 'abc',
                fullName: 'John Doe',
                product: 'car leasing'
            },
            {
                id: 'def',
                fullName: 'Kate Boe',
                product: 'mortgage loan'
            }
        ];
    }
}

module.exports = {
    CustomerRecord,
}
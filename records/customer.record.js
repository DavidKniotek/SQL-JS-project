class CustomerRecord {
    static listAll() {
        return [
            {
                id: 'abc',
                fullName: 'John Doe',
                product: 'Car leasing'
            },
            {
                id: 'def',
                fullName: 'Kate Boe',
                product: 'Mortgage loan'
            }
        ];
    }
}

module.exports = {
    CustomerRecord,
}
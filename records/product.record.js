class ProductRecord {
    static listAll() {
        return [
            {
                id: 'abc1',
                productName: 'Car leasing',
                periodInYears: 3
            },
            {
                id: 'def1',
                productName: 'Mortgage loan',
                periodInYears: 20
            },
        ];
    }
}

module.exports = {
    ProductRecord,
}
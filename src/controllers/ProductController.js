const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.expors = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    }
};
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', {
    useNewUrlParser: true
});

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'Angular',
        description: 'Build applications with Angular',
        url: 'https://angular.io'
    });
    return res.send('Hello Rocketseat')
});

app.listen(3001);   
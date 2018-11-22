const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    Product.create({
        title: 'Angular',
        description: 'Build applications with Angular',
        url: 'https://angular.io'
    });
    return res.send('Hello Rocketseat')
});

module.exports = routes;
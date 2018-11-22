const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', {
    useNewUrlParser: true
});

require('./src/models/Product');

app.get('/', (req, res) => {
    res.send('Hello Rocketseat')
});

app.listen(3001);
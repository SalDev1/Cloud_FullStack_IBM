// import {setTimeout} from 'timers/promises';
// import products from '../data/products.js';

// const {setTimeout} = require('awaitable-timers');
const products = require("../data/products");

const filterProductsAsync = async() => {
    // await setTimeout(1000);
    if(products) {
      return products.filter(p => p.price >= 75000);
    }
}

module.exports = filterProductsAsync;
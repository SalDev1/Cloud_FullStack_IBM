import {setTimeout} from 'timers/promises';
import products from '../data/products.js';

const filterProductsAsync = async() => {
    await setTimeout(1000);
    if(products) {
      return products.filter(p => p.price >= 75000);
    }
}

export default filterProductsAsync;
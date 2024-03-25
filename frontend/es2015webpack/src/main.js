// import products from "./data/products.js"
// import filterProductsAsync from "./analytics/search.js"
const products = require('./data/products');
const filterProductsAsync = require('./analytics/search');
const {showCategories} = require('./service/productCategories');


const main = async() => {
  const result = await filterProductsAsync();
  console.log(result);
}

main()
showCategories(1)
console.log('outside main')

const prices = [5456.5,75456.5,85647.4,23456.5];
const prices1 = [5456.5,75456.5,[85647.4,23456.5]];

const prices2 = [,] // gives you undefined , if been invoked. 
const prices3 = undefined  // Gives an error.
const prices4 = null; // Gives an error


console.log(Math.max(..."11210"))

// let [,,,price2,price3] = prices;
// console.log(`{price1} ${price2} ${price3}`)

let[price1,...price2] = prices;   // Returning price1 == firstValue , arr == prices2
console.log(`a b c ${price1},${price2}`)


// This will return typerror as the result.
try {
   let[val1,val2] = undefined;
} catch(error) {
   console.log(error.name)
}

// Object Destructing.
let products1 = {
  high:75465.7,
  low:55456.5,
  average:35456.3
}

// console.log(products1.average);
// console.log(products1.high);
// console.log(products1.low);

// First declare it and then intialize it.
let high,low,average
({high,low}={average} = products1)  // Object Destructing --> 1st Way.
({high,low,average} = products1)  // 
console.log(`${high},${low},${average}`)

// Assignment , Swapping both values without using the three variable.
let a=4;
let b=5;
[a,b]=[b,a]
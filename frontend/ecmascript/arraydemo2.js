const products = [
    {
      id : 3,
      name : 'Iphone15',
      price : 85456.5
   },{
      id : 4,
      name : "OnePlusR",
      price : 8279.9
   },{
      id : 1,
      name : "Samsung S24",
      price : 70000.23
   }]

console.log(products.length);
// console.log(products[0].name);

// Callback function defined within the sort function.
console.log(products.sort(function(p1,p2) {
    return p1.price - p2.price;
}));

// Simiplified version , using arrow function.
console.log(products.sort((p1,p2) => p1.price-p2.price));

// For Loop.
for(i = 0 ; i < products.length ; i++) {
    if(products[i].price > 75000) {
        console.log(products[i]);
    }
}

// Filter Function , Predicate Function.
console.log(products.filter(p => p.price > 75000));

// For Each Answer.
let filterProducts = [];
console.log(products.forEach(p => {
    if(p.price >= 75000) {
        filterProducts.push(p);
    }
}))
console.log(filterProducts);
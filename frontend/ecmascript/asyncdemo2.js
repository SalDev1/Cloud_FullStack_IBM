const products = [
    {
      id : 3,
      name : 'Iphone15',
      price : 85456.5
   },{
      id : 4,
      name : "OnePlusR",
      price : 180829.9
   },{
      id : 1,
      name : "Samsung S24",
      price : 70000.23
   }]


// Defining the callback function in the below function.
const filterProductsAsync = (cb) => {
    setTimeout(() => {
        cb(products.filter((p) => p.price >= 75000));
    },1000)
}

filterProductsAsync(data => console.log(data));
console.log('After Timeout')
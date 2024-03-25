let products
// const products = [
//     {
//       id : 3,
//       name : 'Iphone15',
//       price : 85456.5
//    },{
//       id : 4,
//       name : "OnePlusR",
//       price : 180829.9
//    },{
//       id : 1,
//       name : "Samsung S24",
//       price : 70000.23
//    }]


// Using the Promises Concept using the same example above.
const filterProductsAsync = () => {
  return new Promise((resolve,reject) => {
   setTimeout(()=> {
      if(products)
        resolve(products.filter(p=>p.price >= 75000.0))
      else 
        reject(new Error('Could not filter products'))
   },1000)
  })
}

const promise = filterProductsAsync()
promise.then(data => console.log(data))
promise.catch(reason => console.log(reason))
console.log('After Timeout')
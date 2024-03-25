const {setTimeout} = require("timers/promises");

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


// Using the Async / Await Concept to solve this problem.
const filterProductsAsync = () => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(products) 
         resolve(products.filter(p=>p.price >= 75000))
      else
        reject(new Error('Could not filter products'))
    })
  },1000)
}

const filterProductsAsync1 = async() => {
    if(products) {
      const res = await products.filter(p=>p.price >= 75000);
      return res;
    }
    else {
      const err = await new Error('Could not filter products');
      return err;
    }
}

const filterProductsAsync2 = async() => {
    await setTimeout(1000);
    if(products) {
      return products.filter(p => p.price >= 75000);
    }
}

const main = async() => {
  try {
    const data = await filterProductsAsync2()
    console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}

main()
console.log('After Timeout')

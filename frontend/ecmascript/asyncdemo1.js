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


const myFunc = function() {
   setTimeout(() => {
      console.log('Inside timeout');
   }, 0)
}

myFunc()
console.log('outside timeout');
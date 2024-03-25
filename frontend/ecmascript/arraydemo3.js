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

   let filterProducts = products.filter(p => p.price > 75000);

   // Method 1.
   let minValue = Number.MAX_VALUE, maxValue = Number.MIN_VALUE;

   filterProducts.forEach((p) => {
    if(minValue > p.price)
        minValue = p.price;
    if(p.price > maxValue)
        maxValue = p.price;
   })

   console.log(minValue);
   console.log(maxValue);

   // Method 2.
   const result = products
   .filter(p => p.price >= 75000)
   .map(p=>p.price)
   .reduce((sum,i) => 
      [Math.min(i,sum[0]), Math.max(i,sum[1])] , 
      [Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]);


   console.log(result);

   // Find out the sum of all products.
   const result1 = products
     .filter(p => p.price >= 75000)
     .map(p=>p.price)
     .reduce((sum,i) => sum += i, 0);

   console.log(result1);
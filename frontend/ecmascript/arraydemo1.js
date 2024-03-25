// Understanding the arrays. 
const prices = [75456.5,89564.5,54345.5,23456.5,99678.5];

console.log(prices instanceof Array);

// push,pop,sort,
console.log(prices.sort());

// Original Array gets modified permanently.
console.log(prices.sort());


// Sort the array in descending manner , use bool comparator.
// Bubble Sort.
const sortByPricesDesc = function(a,b){
    return b-a;
}

console.log(prices.sort(sortByPricesDesc));
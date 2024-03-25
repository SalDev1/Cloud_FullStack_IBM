
'use strict'
var productName='OnePlus12R';  // Global Scope
myFunction()
console.log('product name', productName);

// Function has to invoked.
function myFunction() {
    var productName = 'Iphone15'; // Assigning the productname in a new different place.
    console.log("Hello World");

    for(let i = 0 ; i < 10 ; i++) {
        // console.log('myFunc called',i);
    }
    console.log('myFunc called',i);
}

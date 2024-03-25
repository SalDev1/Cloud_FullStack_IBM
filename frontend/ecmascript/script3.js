let outer = function(x) {
    return function(y) {
        return x+y;
    }
}

const returnFn = outer(45);  // Getting the function reference i.e return function.
const result = returnFn(55); // Passing the second parameter to the function. 
console.log("Result ", result);

console.log("Result ", outer(55)(45));
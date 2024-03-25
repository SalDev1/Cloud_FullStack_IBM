
// Synchronous Example. 
function func1(x) {
    return 2*x;
}

function func2(y) {
    return func1(y+5)-10;
}

console.log(func2(15));

// Asynchronous Example. 
function func3(x) {
    return 2*x;
}
function func4(y,cb) {
   setTimeout(() => {
      cb(func3(y+5)-10)
   },1000)
};

func2(15,result=>console.log(result));
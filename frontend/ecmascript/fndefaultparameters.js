const getPrice = (cb = () => {}) => Math.random(cb);
console.log(getPrice(() => {}));
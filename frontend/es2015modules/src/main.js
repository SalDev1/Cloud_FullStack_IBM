import products from "./data/products.js"
import filterProductsAsync from "./analytics/search.js"

const main = async() => {
  const result = await filterProductsAsync();
  console.log(result);
}

main()
console.log('outside main')
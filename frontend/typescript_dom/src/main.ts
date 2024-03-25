// Once the tree is loaded , DOMContentLoaded will fire the event called getProducts.
// which will show the products to the user.
import eventHandlers from "./controller/productController";  // We are exporting multiple function as a object.

document.addEventListener('DOMContentLoaded', eventHandlers.getProducts);

// We are trying to add Event for edit and delete button which is invoked by particular product
// from array of products.

/*
  We know that the buttons are wrapped under multiple divs 
  So the best thing to target them is using #products , which 
  only allows to add event to the buttons if product exist.
*/
document.querySelector('#products')?.addEventListener('click', eventHandlers.enableEdit);
// document.querySelector(".product-submit")?.addEventListener('click', eventHandlers.updateProduct);
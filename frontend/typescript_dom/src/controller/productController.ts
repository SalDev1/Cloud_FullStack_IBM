import httpClient from "../apiClient/httpClient";
import productsView from "../view/productsView";


async function getProducts() {
    const products = await httpClient.get('http://localhost:4200/products')
    productsView.showProducts(products)
}

function enableEdit(e:any) {
    // console.log(e);
    /*
      If the parent element of the selected anchor tag has edit 
      in the classlist array.

      Access the e body and you will understand it.
    */
    if(e.target.parentElement.classList.contains('edit')) {
        console.log(e)
        // We are trying to fetch the id from the given object destruction.
        const id = e.target.parentElement.dataset.id; // Data attributes.


        // We are trying to access the first sibling in the card body , jumping three levels above.
        // button --> h3(cardbody) --> h4 --> h4

        // previousElementSibling returns the previous element in the same tree level , returns only element
        // previousSibling property returns the previous node on the same tree level , returns an element node,a text node or a comment node.
        const productName = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        
         // // To access the products div , jump two levels up.
        const price = e.target.parentElement.previousElementSibling.previousElementSibling.textContent

        // console.log(productName)
        // console.log(price)
        // Filling the values.
        const product = {
            id,
            productName,
            price
        }

        productsView.fillForm(product);
    }
} 

// async function updateProduct(e:any) {
//     // How do I get the id. 
//     const id = JSON.parse(localStorage.getItem('product_id')!);
//     // Fetch the product using the id.
//     const product = await httpClient.getById("http://localhost:4200/products",id);
//     // Makes the changes with the recent changes.
    

//     // Call the put method.
// }

export default {getProducts , enableEdit};
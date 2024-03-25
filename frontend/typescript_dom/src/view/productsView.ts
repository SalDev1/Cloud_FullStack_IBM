import IProduct from "../model/product"

class View{
    products: HTMLDivElement
    productName: HTMLInputElement
    price: HTMLInputElement
    productSubmit: HTMLButtonElement

    //  Typescript is a little verbose.
    // Strict type-checking is done + Modular Javascript.

    constructor(){
        this.products = <HTMLDivElement> document.querySelector('#products')
        this.productName = <HTMLInputElement>document.querySelector('#productname')
        this.price = <HTMLInputElement>document.querySelector('#price')
        this.productSubmit = <HTMLButtonElement>document.querySelector('.product-submit')
    }
    showProducts(productsData: IProduct[]){
        productsData.forEach(p => {
            this.products.innerHTML += `
            <div class = "card mb-3">
                <div class = "card-body">
                    <h4 class = "card-title">${p.productName}</h4>
                    <h4 class = "card-title">${p.price}</h4>
                    <h3 class = "card-title">${p.starRating}</h3>
                    <a href="#" class="edit card-link" data-id="${p.productId}">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="delete card-link" data-id="${p.productId}">
                        <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div>
            `
        })
    }
    
    // We want to add the specific product details in the input of the form ,  so we overwrite them
    // We pass this view to the productController to get the specific details of the form.
    fillForm(data: any) {
      this.productName.value = data.productName
      this.price.value = data.price
      this.changeFormState('edit')

      localStorage.setItem("product_id", data.id);
   }

   changeFormState(type:string){
    // It helps us to identify the exact type of function invoke by a particular product.
    if(type === 'edit') {
      this.productSubmit.textContent = 'Update Product'
      this.productSubmit.className = 'product-submit btn btn-warning btn-block'

      // We are creating a button to give user the accessibility to cancel the edit.
      const button = document.createElement('button')
      button.className = "product-cancel btn btn-light btn-block p-10"
      button.appendChild(document.createTextNode('Cancel Edit'))
    }
   }
}

// Exporting the object of the View.
export default new View();
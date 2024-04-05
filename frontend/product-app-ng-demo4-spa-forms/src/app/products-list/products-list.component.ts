import { Component, OnInit } from '@angular/core';
import IProduct from '../model/product';
// import products from '../data/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from '../rating/rating.component';
import { ProductClientService } from '../product-client.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})

export class ProductsListComponent implements OnInit{

  // Defining the attributes.
  products : IProduct[] = []
  filteredProducts : IProduct[] = []
  title:string = "Products App"
  private _searchKey : string = ""
  showImage : boolean = false
  errorMessage : string = ''

  // Getters and Setters in Javascript.
  get searchKey(): string {
    return this._searchKey
  }

  // Dependency injection.
  constructor(private clientService: ProductClientService) {

  }
  ngOnInit(): void {
    // Returns the Observable.
    // Until and unless you don't subscribe, it won't make the call.
    // It is similar to the then and catch block.
    this.clientService.getProducts().subscribe({
      next: products => {
        this.products = products
        this.filteredProducts = products
      },
      error : err => this.errorMessage = err
    })

    // Returns the Promise.
    // this.clientService.getProductsUsingPromise()
    // .then((products:IProduct[]) => {
    //   this.products = products
    //   this.filteredProducts = products
    // })
  }

  set searchKey(value:string){
    this._searchKey = value
    this.filteredProducts = this.products.filter((product : IProduct) => 
      product.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
  }

  showOrHide = () => {
    this.showImage = !this.showImage
  }

  // Subscribing the action.
  onRatingClicked(message:string) : void{
    this.title = `Product List ${message}`
  }
}
 
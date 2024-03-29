import { Component } from '@angular/core';
import IProduct from '../model/product';
import products from '../data/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RatingComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  // Defining the attributes.
  products : IProduct[] = products
  filteredProducts : IProduct[] = products
  title:string = "Products App"
  private _searchKey : string = ""
  showImage : boolean = false

  // Getters and Setters in Javascript.
  get searchKey(): string {
    return this._searchKey
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
 
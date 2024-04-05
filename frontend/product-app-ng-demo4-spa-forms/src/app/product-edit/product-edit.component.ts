import { Component } from '@angular/core';
import IProduct from '../model/product';
import { ProductClientService } from '../product-client.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

  product : IProduct = {} as IProduct
  errorMessage: string =''
  // Dependency injection.
  constructor(private clientService: ProductClientService,
    private route : ActivatedRoute,private router : Router) {

  }

  ngOnInit(): void {
    // Returns the Observable.
    // Until and unless you don't subscribe, it won't make the call.
    // It is similar to the then and catch block.

    // Fetching the id from the selected product route.
    const param = this.route.snapshot.paramMap.get('id')
    if(param) {
        this.clientService.getProductsById(+param).subscribe({
          next: product => this.product = product,
          error : err => this.errorMessage = err
        })
    }

    // Returns the Promise.
    // this.clientService.getProductsUsingPromise()
    // .then((products:IProduct[]) => {
    //   this.products = products
    //   this.filteredProducts = products
    // })
  }

  // Understanding Angular Reactive Forms.
  // Based on the model , the form is generated for us. 
  form = new FormGroup({})
  fields: FormlyFieldConfig[] = [
    {
      key:'productId',
    },
    {
      key:'productName',
      type:'input',
      props:{
        required:true,
        label: 'Product Name'
      }
    },
    {
      key:'pricee',
      type:'input',
      props:{
        required:true,
        label: 'Price'
      }
    },
    {
      key:'productAvailable',
      type:'input',
      props:{
        required:true,
        label: 'ProductAvailable'
      }
    },
    {
      key:'productCode',
      type:'input',
      props:{
        required:true,
        label: 'Product Code'
      }
    },
    {
      key:'starRating',
      type:'input',
      props:{
        required:true,
        label: 'Rating'
      }
    },
  ]

  submit():void{
    if(this.form.valid){
      if(this.form.dirty) {
        this.clientService.updateExistingProduct(this.product)
        .subscribe({
          next: product => {
            this.form.reset()
            this.router.navigate(['/products'])
          },
          error : err => this.errorMessage = err
        })
      }
    }
  }
  
}

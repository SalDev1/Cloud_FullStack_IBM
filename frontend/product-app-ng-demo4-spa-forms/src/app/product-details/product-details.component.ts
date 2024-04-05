import { Component, OnInit } from '@angular/core';
import { ProductClientService } from '../product-client.service';
import IProduct from '../model/product';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product : IProduct | undefined
  errorMessage: string =''
  // Dependency injection.
  constructor(private clientService: ProductClientService,private route : ActivatedRoute,private router : Router) {

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

  onBack() : void{
    this.router.navigate(['/products'])
  }
}

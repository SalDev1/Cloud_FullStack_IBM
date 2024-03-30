import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:'products',
    component: ProductsListComponent,
    title:'ProductsList'
  },
  {
    path:'products/:id',
    component:ProductDetailsComponent,
    title:'ProductsDetails'
  },
  {
    path:'welcome',
    component:ProductsListComponent,
    title:'Welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

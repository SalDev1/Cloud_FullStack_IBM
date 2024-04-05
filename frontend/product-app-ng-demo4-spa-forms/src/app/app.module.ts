import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { RatingComponent } from './rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyBootstrapInputModule } from '@ngx-formly/bootstrap/input';
import { FormlyModule } from '@ngx-formly/core';

// Decorator --> NgModule , this is the decorator we will use to build a module , where 
// grouping multiple modules into one single module.
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    RatingComponent,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyBootstrapInputModule,

    FormlyModule.forRoot({  // Global Validations.
      validationMessages:[
        {name:'required',message:'Field is mandatory'}
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

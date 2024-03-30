import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { RatingComponent } from './rating/rating.component';
import { HttpClientModule } from '@angular/common/http';

// Decorator --> NgModule , this is the decorator we will use to build a module , where 
// grouping multiple modules into one single module.
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

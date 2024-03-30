import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IProduct from './model/product';
import { Observable, catchError, tap, throwError } from 'rxjs'; 
import httpClient from './apiClient/httpClient';
// tap , catchError --> Observable Operators.

/*
  The entire code below is a Service Class.

  This is the service class where the entire API calls
  are been handled.
*/
@Injectable({
  providedIn: 'root'
})
export class ProductClientService {
  constructor(private client:HttpClient) { }

  // The below code returns the observable of the product array.
  // Observable is Lazy.
  getProducts(): Observable<IProduct[]> {
   return this.client.get<IProduct[]>('http://localhost:4500/products')
   .pipe(tap(data=>console.log(data)),
   catchError((err:HttpErrorResponse)=> throwError(() => `An error occured`)) )
  }

  // Fetching a product with a specific id.
  getProductsById(id: number): Observable<IProduct> {
    return this.client.get<IProduct>(`http://localhost:4500/products/${id}`)
    .pipe(tap(data=>console.log(data)),
    catchError((err:HttpErrorResponse)=> throwError(() => `An error occured`)) )
   }

  // The below code returns the promise of the product array.
  // Promise is Quite Eager.
  getProductsUsingPromise(): Promise<IProduct[]> {
    return httpClient.get('http://localhost:4500/products');
  }
}

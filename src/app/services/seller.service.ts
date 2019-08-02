import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http'
import {Product} from './../models/product'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private addProductUrl="http://localhost:3000/product/AddProduct"

  constructor(private http:HttpClient) { }

  addProduct(f: FormData)
  {
  
   return this.http.post<any>(this.addProductUrl,f);
  }
}

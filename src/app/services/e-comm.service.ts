import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ECommService {

  private getAllProductUrl="http://localhost:3000/product/getAll";

  private addCartUrl="http://localhost:3000/cart/addCart";

  private getByCategoryUrl="http://localhost:3000/product/getByCategory/"

  constructor(private http :HttpClient) { }


  getAllProducts()
  {
   return this.http.get<any>(this.getAllProductUrl);
  }

  getByCateg(s:string)
  {
    console.log(s);
    
   return this.http.get<any>(this.getByCategoryUrl+s);
  }

  addCart()
  {
    return this .http.get<any>(this.addCartUrl);
  }
  

}
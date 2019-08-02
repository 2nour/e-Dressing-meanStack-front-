import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './../models/client'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from './../models/product'
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  //http fiha tt les fonction prghedif illy ykhaliwna namlou communication m3a wev service
  private userInscriptionUrl = "http://localhost:3000/client/inscription";
  private userConnectionUrl = "http://localhost:3000/client/connection";
  private getUsersUrl = "http://localhost:3000/client/getAllUser";
  private GetcartUrl = "http://localhost:3000/client/getUserCard"
  private addcartUrl = "http://localhost:3000/client/addCard/";

  private addItemToCartUrl = "http://localhost:3000/cart/addItemToCart/";

  private removeFromCartUrl = "http://localhost:3000/cart/removeFromCart/";

  constructor(private http: HttpClient) { }


  removeFromCart(p: Product,id: string) {

    return this.http.put<any>(this.removeFromCartUrl + id, p);

  }

  addCart(id: string) {

    let t = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({ "Authorization": t })
    }
    return this.http.put<any>(this.addcartUrl + id, null, httpOptions);
  }

  getCard() {

    let t = localStorage.getItem('token');


    const httpOptions = {
      headers: new HttpHeaders({ "Authorization": t })
    }
    return this.http.get<any>(this.GetcartUrl, httpOptions);

  }


  addItemToCart(p: Product, id: string) {
    return this.http.put<any>(this.addItemToCartUrl + id, p);

  }



  userIncription(user: Client) {
    return this.http.post<any>(this.userInscriptionUrl, user);
  }


  userConnection(user: Client) {
    return this.http.post<any>(this.userConnectionUrl, user);
  }

  getUsers() {
    return this.http.get<any>(this.getUsersUrl);

  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isLoggedUser() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();


    if (token != null) {

      const decodedLogin = helper.decodeToken(token);

      if (decodedLogin.statut === "user") {

        return true;
      }

    }

    return false
  }

  isLoggedAdmin() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();



    if (token) {
      const decodedLogin = helper.decodeToken(token);


      if (decodedLogin.statut === "admin") {

        return true;
      }

    }


    return false
  }

}

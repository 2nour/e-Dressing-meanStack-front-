import { Component, OnInit } from '@angular/core';
import { ECommService } from './../../../services/e-comm.service';
import { UserService } from './../../../services/user.service';
import { Location } from '@angular/common';

import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];

  c: string = "Clothes";
  a: string = "Accessories";

  cartBlueImgPath: string;
  heartRedImgPath: string;
  cartImgPath: string;
  heartImgPath: string;



  isNotCart: boolean = localStorage.getItem('cart') == null;

  constructor(private _es: ECommService, private _us: UserService) {
    this.cartBlueImgPath = "assets/images/cart-blue.svg";
    this.heartRedImgPath = "assets/images/like-red.svg";
    this.cartImgPath = "assets/images/cart-black.svg";
    this.heartImgPath = "assets/images/like-black.svg";
  }

  ngOnInit() {

    if (this.isNotCart) {


      this._es.addCart().subscribe((res) => {

        console.log('card added' + res);
        localStorage.setItem('cart', res);
      }), (err) => {
        console.log(err);

      }

    }
    else {
      console.log('card exist');

    }


    this._es.getAllProducts().subscribe((res) => this.products = res, (err) => console.log(err));
    this._us.getCard().subscribe((res) => {
      console.log('yeeey');


    }, (err) => console.log(err));


  }

  //ADDING ITEMS TO THE CART
  cart(product) {
    let id = localStorage.getItem('cart');
    console.log(id);
    
    this._us.addItemToCart(product, id).subscribe((res) => {
      console.log('yeeey');


    }, (err) => console.log(err));
  }
  

  getCategory(s: string) {

    this._es.getByCateg(s).subscribe((res) => {

      this.products=res;
      
    }), (err) => {
      console.log(err);
    }
  }



}

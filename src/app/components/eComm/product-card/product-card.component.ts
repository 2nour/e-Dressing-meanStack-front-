import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product';
import { ECommService } from './../../../services/e-comm.service';
import { UserService } from './../../../services/user.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  cartBlueImgPath: string;
  heartRedImgPath: string;
  cartImgPath: string;
  heartImgPath: string;

  products = [];

  constructor(private _es: ECommService, private _us: UserService) {
    this.cartBlueImgPath = "assets/images/cart-blue.svg";
    this.heartRedImgPath = "assets/images/like-red.svg";
    this.cartImgPath = "assets/images/cart-black.svg";
    this.heartImgPath = "assets/images/like-black.svg";
  }

  ngOnInit() {

    this._es.getAllProducts().subscribe((res) => this.products = res, (err) => console.log(err));
    this._us.getCard().subscribe((res) => {
      console.log('yeeey');


    }, (err) => console.log(err));


  }

//ADDING ITEMS TO THE CART
  cart(product) {
    let id =localStorage.getItem('cart');
    this._us.addItemToCart(product,id).subscribe((res) => {
      console.log('yeeey');


    }, (err) => console.log(err));
  }
}

import { Product } from "../../../models/product";
import { Title } from '@angular/platform-browser';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from './../../../services/user.service'



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  products: [
    {}
  ];
  quantity: number = 1;


  constructor(private title: Title, private _us: UserService) {
  }

  ngOnInit() {
    this._us.getCard().subscribe((res) => {
      this.products = res.products;
      console.log(this.products);


      var a = [], b = [], prev;

      for (let i = 0; i < this.products.length; i++) {

        this.products.sort();

        if (this.products[i] !== prev) {

          a.push(this.products[i]);
          b.push(1);
        } else {
          b[b.length - 1]++;
        }
        prev = this.products[i];



      }
      console.log(a);

      console.log(prev);




    }, (err) => { console.log(err) })

  }





  remove(product: Product) {

   let id=localStorage.getItem('cart');
    this._us.removeFromCart(product,id).subscribe((res)=>{

      console.log('deleted');

    }),(err)=>{
      console.log('noooooooooos');
      
    }
  }

  /*
   
   
    IncrementItem(): void {
      this.quantity = this.quantity + 1;

  
    DecreaseItem(): void {
      if(this.quantity >=2)
       this.quantity = this.quantity - 1;
       else
       this.quantity=1;
    }*/
}

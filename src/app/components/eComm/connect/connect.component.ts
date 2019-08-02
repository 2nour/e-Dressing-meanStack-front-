import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Client } from './../../../models/client'




@Component({
  selector: 'app-connection',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  connForm: FormGroup;
  client: Client;
  token: string;
  isLogged: boolean = localStorage.getItem('token') != null;



  constructor(private t: Title,private fb: FormBuilder, private _us: UserService, private toastr: ToastrService, private route: Router) {

    this.connForm = fb.group({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      pass: new FormControl("", [
        Validators.required,

      ])
    })
    this.t.setTitle("Connexion");
  }


  get email() {
    return this.connForm.get('email');
  }
  get pass() {
    return this.connForm.get('pass');
  }
  ngOnInit() {
    /*this.isLogged = localStorage.getItem('token') != null;
    if (this._us.isLoggedUser()) {
      this.route.navigate(['/to-do-list'])
    }
    else {
      
      
      if (this._us.isLoggedAdmin()) {
        console.log("aaaaaaaaaaaaa");
        this.route.navigate(['/admin'])

      }
    }*/


  }

  connection() {

    let data = this.connForm.value;

    let client= new Client(null, null, null, data.email, data.pass);

    this._us.userConnection(client).subscribe((res) => {

      this.toastr.success('connected');

      localStorage.setItem('token', res.token);

      if (this._us.isLoggedAdmin()) {
        this.route.navigate(['/userActiveate'])
      }
      else
      {
        this.route.navigate(['/home']);

      }


      console.log(res.token);

    }, (err) => {

      this.toastr.error(err.error.message);
      console.log(err);
    });


    //getting the user's cart
    this._us.getCard().subscribe((res)=>{
      localStorage.removeItem('cart');
      localStorage.setItem('cart',res._id)

    })

  }



}

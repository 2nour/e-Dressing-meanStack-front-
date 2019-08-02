import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Client } from '../../../models/client'
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subsform: FormGroup;
  client: Client;


  constructor(private fb: FormBuilder, private _us: UserService, private toastr: ToastrService, private router: Router) {
    this.subsform = fb.group(
      {
        nom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        prenom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        tel: new FormControl("", [
          Validators.required,
          Validators.pattern('[0-9]+'),
          Validators.minLength(8)

        ]),
        email: new FormControl("",
          [
            Validators.required,
            Validators.email
          ]),
        motDePass: new FormControl("", [
          Validators.required,
          Validators.minLength(6)
        ]),
        ReMotDePass: new FormControl("", [
          Validators.required,
        ])
      }
    );
  }

  get nom() {
    return this.subsform.get('nom');
  }
  get prenom() {
    return this.subsform.get('prenom');
  }

  get tel() {
    return this.subsform.get('tel');
  }
  get email() {
    return this.subsform.get('email');
  }

  get pass() {
    return this.subsform.get('motDePass');
  }

  get confirmPass() {
    return this.subsform.get('ReMotDePass');
  }

  ngOnInit() {
    this.client = new Client();
    if (this._us.isLoggedUser()) {
      this.router.navigate(['/home'])
    }
    else {
      if (this._us.isLoggedAdmin()) {
        this.router.navigate(['/admin'])

      }
    }
  }

  inscription() {
    // console.log(this.subsform.value);
    let data = this.subsform.value;
    let client = new Client(data.nom, data.prenom, data.tel, data.email, data.motDePass);


    this._us.userIncription(client).subscribe((res) => {

      this.toastr.success('user ajouté');




      let c = new Client(null, null, null, client.email, client.pass);

      this._us.userConnection(client).subscribe((res) => {

        this.toastr.success('connected');

        localStorage.setItem('token', res.token);

        let cart = localStorage.getItem('cart');
        console.log(cart);

        // adding a cart to the user
        this._us.addCart(cart).subscribe((res) => {

          console.log(res);

        }, (err) => {

          this.toastr.error(err.error.message);
          console.log(err);
        });


        if (this._us.isLoggedAdmin()) {
          this.router.navigate(['/addProduct'])
        }
        else {
          this.router.navigate(['/home']);

        }



      }, (err) => {

        this.toastr.error(err.error.message);
        console.log(err);
      });


    }, (err) => {
      this.toastr.error('erreur d ajout');

      console.log(err);
    });



  }




}



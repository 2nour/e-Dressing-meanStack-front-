import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Client } from '../../../models/client'
import { AdminService } from '../../../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { log } from 'util';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  clients = [];
  

  constructor(private _us: AdminService, private tr: ToastrService,private t:Title) { 

    this.t.setTitle("Admin");

  }

  ngOnInit() {
    this._us.getUsers().subscribe((res) => {
      this.clients = res;
      console.log(this.clients);

    })

  }

  activerUser(user) {
    console.log(user._id);

    this._us.activateUser(user._id).subscribe((res) => {
      this.clients = res;

      this.tr.success("changed!");
     // this.ngOnInit();
    }, (err) => {
      this.tr.error("pfff!");
    })

  }

}

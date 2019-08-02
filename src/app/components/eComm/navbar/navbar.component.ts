import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { UserService } from './../../../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url = "./../assets/bee.png";
  isConnected: boolean = false;
  carts =[];

  constructor(private router: Router, private _us: UserService) { }

// dynamic login log out buttons
  ngOnInit()
   {
     
     this._us.getCard().subscribe((res)=>{this.carts=res},(err)=>{console.log(err)})
     
    if (this._us.isLoggedUser() || this._us.isLoggedAdmin()) 
    
    {
      this.isConnected = true;
    
    }

    else 
    {
      this.isConnected = false;
    }

  }

// log-in
  conn() 
  {
    this.router.navigateByUrl('/login');
  }

  // log-out
  deco() 
  {

    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    this.isConnected = false;
    this.router.navigateByUrl('/home');
  }
  

}

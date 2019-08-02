import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/eComm/home/home.component';
import { ProductAddComponent } from './components/seller/product-add/product-add.component';
import { NavbarComponent } from './components/eComm/navbar/navbar.component';
import { ConnectComponent } from './components/eComm/connect/connect.component';
import { SubscribeComponent } from './components/eComm/subscribe/subscribe.component';

import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';
import { CartComponent } from './components/eComm/cart/cart.component';
import { AdminComponent } from './components/admin/admin/admin.component';



const routes: Routes = [

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

  {
    path:'',
    component : NavbarComponent,
    children : [

      {
        path:'home',
        component : HomeComponent,

      },
      {
        path:'addProduct',
        component : ProductAddComponent,
        canActivate:[UserGuard]

      },
      {
        path:'login',
        component : ConnectComponent
      },
      {
        path:'inscription',
        component : SubscribeComponent
      },
      {
        path:'cart',
        component : CartComponent
      },
     
      

    ]
  },
  {
    path:'userActiveate',
    component : AdminComponent,
    canActivate:[AdminGuard]

  },
 
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

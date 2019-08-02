
//imports
import { BrowserModule ,Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







//declarations
import { AppComponent } from './app.component';
import { HomeComponent } from './components/eComm/home/home.component';
import { SubscribeComponent } from './components/eComm/subscribe/subscribe.component';
import { ConnectComponent } from './components/eComm/connect/connect.component';
import { ProductListComponent } from './components/seller/product-list/product-list.component';
import { ProductAddComponent } from './components/seller/product-add/product-add.component';
import { ProductUpdateComponent } from './components/seller/product-update/product-update.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryAddComponent } from './components/admin/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/admin/category-update/category-update.component';
import { ProductCardComponent } from './components/eComm/product-card/product-card.component';
import { CartComponent } from './components/eComm/cart/cart.component';
import { AdminComponent } from './components/admin/admin/admin.component';





//providers
import { AdminService } from './services/admin.service';
import { ECommService } from './services/e-comm.service';
import { SellerService } from './services/seller.service';
import { UserService } from './services/user.service';
import { NavbarComponent } from './components/eComm/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscribeComponent,
    ConnectComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added

  ],
  providers: [
     Title,
    AdminService,
    ECommService,
    SellerService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

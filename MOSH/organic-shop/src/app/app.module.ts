

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { DatabaseModule } from '@angular/fire/database';
import { AuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebase),
    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyCd9Eb7zEoIsaplPkZ1Uu_HwU-_zoMBcYM",
    //   authDomain: "organic-shop-5d72e.firebaseapp.com",
    //   projectId: "organic-shop-5d72e",
    //   storageBucket: "organic-shop-5d72e.appspot.com",
    //   messagingSenderId: "140916316032",
    //   appId: "1:140916316032:web:66ed8ba6b15d691ded1365",
    //   measurementId: "G-YMCV65YBL4"
    // }),
    DatabaseModule,
    AuthModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

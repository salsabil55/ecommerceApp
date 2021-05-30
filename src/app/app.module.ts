import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCayjHEH6yLVgH3h_MBD30vOODJiFvTvY0",
        authDomain: "ecommerce-869dd.firebaseapp.com",
        projectId: "ecommerce-869dd",
        storageBucket: "ecommerce-869dd.appspot.com",
        messagingSenderId: "34472343574",
        appId: "1:34472343574:web:44d262cc734d443ad99d37",
        measurementId: "G-4DFGPC99WM"
      }
    ),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

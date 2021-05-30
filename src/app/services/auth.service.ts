import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private authFire: AngularFireAuth) {
   }

  signUp(email, password) {
    return this.authFire.createUserWithEmailAndPassword(email, password);
  }
  signIn(email, password){
    return this.authFire.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.authFire.signOut();
  }
}

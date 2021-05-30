import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app'

@Injectable
({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  constructor(private authFire: AngularFireAuth) {
    this.user = authFire.user;
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

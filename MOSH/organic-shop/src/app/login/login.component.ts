
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth){
  
  }
  
  login() {

    this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider());
  }

}

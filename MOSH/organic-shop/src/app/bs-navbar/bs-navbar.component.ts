import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrl: './bs-navbar.component.css'
})
export class BsNavbarComponent  {

  user: any;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => this.user = user);
  }

  logout() {

    this.afAuth.signOut();
// new firebase.signOut
  }
}

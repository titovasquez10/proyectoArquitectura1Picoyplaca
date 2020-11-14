import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    // public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  SignIn(email, password): any {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['about']);
        });
        // this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email, password): Promise<void> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        // this.SendVerificationMail();
        // this.SetUserData(result.user);
        window.alert('Very good!');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  /*SendVerificationMail() {
    return this.afAuth.currentUser.sendEmailVerification().then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }*/
}
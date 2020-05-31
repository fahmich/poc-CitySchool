import { Injectable, NgZone } from '@angular/core';
import { User } from "../models/user";
import { auth, firestore } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { UserService } from './firebase-services/user.service';

import * as firebase from 'firebase/app';
 
@Injectable({
  providedIn: 'root'

})

export class AuthService {
  userData: any;
  codedefamille: any; // Save logged in user data
  codefamily:any;
    Count:any;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
   
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private userService:UserService
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;

        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));

        localStorage.setItem('codedefamille', 
        JSON.stringify(this.codedefamille));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
 
  async SignIn(codefamille,email, password) {
    return  this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(async (result) => {
     
      this.ngZone.run(async () => { 
        this.afAuth.user.subscribe(res=>{
        this.userService.getUser(res.uid).subscribe((item:any)=>{
         
          this.userData=item
          if(item.codefamille ===codefamille ){
           this.router.navigate(['dashboard']);
            } else{
              window.alert("veuillez vérifier code famille saisies ")
           }
        })        
      })
       });     
      }).catch((error) => {
        window.alert(error.message)
      })
  } 

  
  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */     
        this.SetUserDatawithnewcodefamily(result.user);

        this.userService.getUser(result.user.uid).subscribe((item:any)=>{
           this.codedefamille=item.codefamille})
    
        this.SendVerificationMail();
       }).catch((error) => {
        window.alert(error.message)
      })
  }

  statedoc(){
    const increment = firestore.FieldValue.increment(1);
    const statsRef = this.afs.collection('users').doc('--stats--').ref;
    const batch = this.afs.firestore.batch();
    batch.set(statsRef, { storyCount: increment }, { merge: true });
    batch.commit();
   
    //  this.afs.collection("users").doc('--stats--').valueChanges()
    // .subscribe((item:any)=>{  

    //   console.log('this item 1',item.storyCount)
    //    return item.storyCount
    //  }) 
    
      this.userService.getStat().subscribe((item:any)=>{
        console.log('this item 1',item.storyCount)
   
      return item.storyCount  
       
       })
    
  }

  generateCodeFamily() {
 
    var year = `${(new Date()).getFullYear()}`;
    var code1 = year.substring(0,2);
    var code2= this.statedoc();
    
    console.log('this is  223', code2 )

    this.codefamily=`F-${code1}`+`-${code2}`;
    return this.codefamily 
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("AAA",user)
   // return (user !== null && user.emailVerified !== false) ? true : false;
     return (user !== null ) ? true : false;

  }
 
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserDatawithnewcodefamily(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      codefamille : this.generateCodeFamily() ,
    }
    return userRef.set(userData, {
      merge: true
    })
  }
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      codefamille : user.codefamille  

    }
    return userRef.set(userData, { merge: true   })
  }

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}

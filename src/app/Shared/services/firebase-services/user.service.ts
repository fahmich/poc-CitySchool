import { Injectable } from '@angular/core';
 import { AngularFirestore } from '@angular/fire/firestore';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  objectRole:any
  role:string;
  array:any[]=[]
  constructor(
   public firestore: AngularFirestore,

  ) { }

  getUser(id:string) {      
    return this.firestore.collection("users").doc(id).valueChanges();
    }  
  updateUser(user){
    console.log(user);   
      return this.firestore.collection("users").doc(user.uid).set(user, { merge: true });   
  }
  getStat() {      
    return this.firestore.collection("users").doc('--stats famille--').valueChanges()
    }
  
    
}

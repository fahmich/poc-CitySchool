import { Injectable } from '@angular/core';
 import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
 import { Observable } from 'rxjs';
import { AuthService } from "../../../shared/services/auth.service";
import { User } from '../../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { child } from '../../models/child';
import { UserService } from './user.service';
import {   firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChildsService {
    listitem: AngularFirestoreCollection<child>
    child: Observable<child[]>;
    idNameSpace :string;
    ref: AngularFirestoreDocument<any> ;
    user: User
    codeChild :any
    code2:any
  constructor(
   public afs: AngularFirestore,
   private authService: AuthService,
   private userService :UserService
   ) { }


   generateCodechild() {
      const batch = this.afs.firestore.batch();
      batch.set( this.afs.collection('users').doc('--stats child--').
          ref, { storyCount: firestore.FieldValue.increment(1) }, { merge: true });
      batch.commit();
  
     
      var year = `${(new Date()).getFullYear()}`;
      var code1 = year.substring(0,2);
     
      this.userService.getStatchild().subscribe((item:any)=>{this.code2=item.storyCount  
            console.log('this item 1', this.code2)          
           })
      
      console.log('this is  223',  this.code2 );
       this.codeChild=`E-${code1}`+`-${ this.code2}`;
  
      return this.codeChild 
    }
  creatChild(idNameSpace,child :child) {
    return new Promise<any>((resolve, reject) => {         
        const id =this.afs.createId();
        child.$key = id
        child.idUser = this.authService.userData.uid; 
        this.codeChild=this.generateCodechild()()


     this.afs.collection("users").doc(idNameSpace).collection("childs").doc(this.codeChild).set(parent, { merge: true });   
      
      });
   } 
 
  deleteChild(idNameSpace,codeChild) {
    return this.afs.collection("users").doc(idNameSpace).collection("childs").doc(codeChild).delete();
   }
  getChilds(idNameSpace) {      
      return  this.afs.collection("users").doc(idNameSpace).collection("childs").valueChanges();
      }
 
 
}

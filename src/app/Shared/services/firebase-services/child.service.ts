import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from "../../../shared/services/auth.service";
import { User } from '../../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { child } from '../../models/child';
import { UserService } from './user.service';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChildsService {
  listitem: AngularFirestoreCollection<child>
  child: Observable<child[]>;
  idNameSpace: string;
  ref: AngularFirestoreDocument<any>;
  user: User
  codeChild: any
  code2: any
  constructor(
    public afs: AngularFirestore,
    private authService: AuthService,
  ) { }


  creatChild(idNameSpace, child: child) {
    return new Promise<any>((resolve, reject) => {
      const id = this.afs.createId();
      child.$key = id
      child.idUser = this.authService.userData.uid;     
      this.codeChild = this.authService.generateCodechild();
      child.codeChild= this.codeChild;
      console.log("generateCodechild=",this.authService.generateCodechild())

      this.afs.collection("users").doc(idNameSpace).collection("childs").doc(this.codeChild).set(JSON.parse(JSON.stringify(child)));

    });
  }

  deleteChild(idNameSpace, codeChild) {
    return this.afs.collection("users").doc(idNameSpace).collection("childs").doc(codeChild).delete();
  }
  getChilds(idNameSpace) {
    return this.afs.collection("users").doc(idNameSpace).collection("childs").valueChanges();
  }

}

import { Injectable } from '@angular/core';
 import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Parent } from '../../models/parent';
import { Observable } from 'rxjs';
import { AuthService } from "../../../shared/services/auth.service";
import { User } from '../../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
    listitem: AngularFirestoreCollection<Parent>
    parent: Observable<Parent[]>;
    idNameSpace :string;
    ref: AngularFirestoreDocument<any> ;
    user: User
  constructor(
   public firestore: AngularFirestore,
   private authService: AuthService,
   ) { }

  creatPere(idNameSpace,parent :Parent) {
    return new Promise<any>((resolve, reject) => {         
        const id =this.firestore.createId();
        parent.$key = id
        parent.idUser = this.authService.userData.uid; 
  
     this.firestore.collection("users").doc(idNameSpace).collection("parents").doc("pere").set(JSON.parse(JSON.stringify(parent)));
      
      });
   } 
    getPere(idNameSpace,role) {      
    return  this.firestore.collection("users").doc(idNameSpace).collection("parents").doc(role).valueChanges();
    }  
    
   creatMere(idNameSpace,parent :Parent) {
    return new Promise<any>((resolve, reject) => {          
        const id =this.firestore.createId();
        parent.$key = id
        parent.idUser = this.authService.userData.uid; 
     this.firestore.collection("users").doc(idNameSpace).collection("parents").doc("mere").set(JSON.parse(JSON.stringify(parent)));
      
      });
   } 
   creatAutre(idNameSpace,parent :Parent) {
    return new Promise<any>((resolve, reject) => {          
        const id =this.firestore.createId();
        parent.$key = id
        parent.idUser = this.authService.userData.uid; 
     this.firestore.collection("users").doc(idNameSpace).collection("parents").doc("autre").set(JSON.parse(JSON.stringify(parent)));
      
      });
   } 
 
  updateMere(idNameSpace,role){
       return this.firestore.collection("users").doc(idNameSpace).collection("parents").doc(role).set(parent, { merge: true });   
  }
  updatePere(idNameSpace,role){
        return this.firestore.collection("users").doc(idNameSpace).collection("parents").doc(role).set(JSON.parse(JSON.stringify(parent)));
  }

  deleteParent(idNameSpace,role: string) {
    return this.firestore.collection("users").doc(idNameSpace).collection("parents").doc(role).delete();
   }
  
  // getUser(idNameSpace) {      
  //   return this.firestore.collection("users").doc(idNameSpace).collection("reseaux").valueChanges();
  //   }  
 //    form: FormGroup = new FormGroup({
//     $key: new FormControl(null),
//     idUser: new FormControl(null),

//     nom: new FormControl(''),
//     prenon: new FormControl(''),
//     mobile: new FormControl(''),
//     fix: new FormControl(''),

//     NumeroDeRue: new FormControl(''),
//     NomDeRue: new FormControl(''),
//     codePostal:  new FormControl(''),

//     referentPedagogique :new FormControl(''),
//     referentLegal:new FormControl(''),
//     prixTotalApllique: new FormControl(''),
//     prixApplique: new FormControl(''),
//    });   
// initializeFormGroup() {
//   this.form.setValue({
//     $key: null,
//     idUser: null,
//     nom: '' ,
//     prenon:'',
//     mobile:'',
//     fix:'',

//     NumeroDeRue:'',
//     NomDeRue:'',
//     codePostal: '',

//     referentPedagogique :'',
//     referentLegal:'',
//     prixTotalApllique:'',
//     prixApplique:'',
//   })
// };
//  populateForm(marque) {
//       this.form.setValue(marque);
//     }
}

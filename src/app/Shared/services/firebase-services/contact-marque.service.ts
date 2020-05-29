import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
 import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from '../../models/contact';
import { AuthService } from '../auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class ContactMarqueService {
  contact: Observable<Contact[]>;
  idNameSpace :string;
  ref: AngularFirestoreDocument<any> ;


  identreprise : string;
    constructor(
        private authService:AuthService,
        private firestore: AngularFirestore
        ) { }
    form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      nom: new FormControl(''),
      adress: new FormControl(''),
      telephone1: new FormControl(''),
      });   
 initializeFormGroup() {
    this.form.setValue({
      $key: null,
      nom: '',
      adress:'',
      telephone1:'',
     
    })
  };
   
    populateForm(contact) {
      this.form.setValue(contact);
    }  

    creatContact(contact:Contact) {
      return new Promise<any>((resolve, reject) => { 
       const id =this.firestore.createId();
       contact.$key =id
        this.firestore.collection("contacts")
         .add( (contact) );
        
        });
     } 
     
 
  }
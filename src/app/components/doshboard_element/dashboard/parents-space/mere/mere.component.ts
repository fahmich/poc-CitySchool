import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ParentsService } from 'src/app/Shared/services/firebase-services/parent.service';
import { Parent } from 'src/app/Shared/models/parent';
import { ValidationdataService } from 'src/app/Shared/services/firebase-services/validation.dataStore.service';

@Component({
  selector: 'app-mere',
  templateUrl: './mere.component.html',
  styleUrls: ['./mere.component.css']
})
export class MereComponent implements OnInit {
 
    formParentsService: FormGroup;
    Parent: Parent = new Parent();
    uid:any
    constructor(
     private formBuilder: FormBuilder,
     public parentsService:ParentsService  ,
     public validationdataService:ValidationdataService

   ) {   
   }
  
   ngOnInit(): void {
    this.formParentsService = new FormGroup({});
    this.uid=localStorage.getItem('uid')
    this.getMere('mere') 
    this.formParentsService = this.createUserModelForm();
    this.validationdataService.validation$.subscribe((item: any) => {
      if (item != undefined) {
console.log(this.formParentsService.value)
this.parentsService.creatMere(this.uid,this.formParentsService.value);
}
   })
 
   }
   createUserModelForm() {
     return this.formBuilder.group({

      idUser  : [this.Parent.idUser],
      nom   : [this.Parent.nom],
      prenon  : [this.Parent.prenon],
      telephonePortable : [this.Parent.telephonePortable],
      telephoneFixe : [this.Parent.telephoneFixe],
      numeroDeRue  : [this.Parent.numeroDeRue],
      nomDeRue   : [this.Parent.nomDeRue],
      codePostal  : [this.Parent.codePostal],    
       referentLegal : [this.Parent.referentLegal],
       referentPedagogique  : [this.Parent.referentPedagogique],
       prixApplique: [this.Parent.prixApplique],
       prixTotalApllique : [this.Parent.prixTotalApllique],
   
     });
   }
  
   getMere(role) {
    this.parentsService.getParent(this.uid,role).subscribe((item:any)=>{
     this.Parent=item 
     //console.log("mere",this.Parent)
     if(item !=undefined){
     this.formParentsService = this.createUserModelForm();
    }
    })        
   }
  
   onSubmit(formParentsService) {
    //  console.log(formParentsService.value)
     this.parentsService.creatMere(this.uid,formParentsService.value);
   }

   deleteParent(role) {
    this.parentsService.deleteParent(this.uid,role);
  }
  }
   
   
  
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ParentsService } from 'src/app/Shared/services/firebase-services/parent.service';
import { Parent } from 'src/app/Shared/models/parent';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  ParentsService: FormGroup;
  Parent: Parent = new Parent();
  uid:any
  constructor(
   private formBuilder: FormBuilder,
   public parentsService:ParentsService  
 ) {   
 }

 ngOnInit(): void {
   this.ParentsService = new FormGroup({});
   this.ParentsService = this.createUserModelForm();
   this.uid=localStorage.getItem('uid')

 }
 createUserModelForm() {
   return this.formBuilder.group({
     nomDeRue   : [this.Parent.nomDeRue],
     numeroDeRue  : [this.Parent.numeroDeRue],
     codePostal  : [this.Parent.codePostal],
     fixe : [this.Parent.fix],
     idUser  : [this.Parent.idUser],
     mobile : [this.Parent.mobile],
     nom   : [this.Parent.nom],
     prenon  : [this.Parent.prenon],
     prixApplique: [this.Parent.prixApplique],
     prixTotalApllique : [this.Parent.prixTotalApllique],
     referentLegal : [this.Parent.referentLegal],
     referentPedagogique  : [this.Parent.referentPedagogique],
 
   });
 }
 
 onSubmit(ParentsService) {
   console.log(ParentsService.value)
   this.parentsService.creatPere(this.uid,ParentsService.value);
 }
 
}
 
 

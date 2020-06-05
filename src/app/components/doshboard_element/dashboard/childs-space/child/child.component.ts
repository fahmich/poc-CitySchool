import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { child } from 'src/app/Shared/models/child';
import { MatAccordion } from '@angular/material/expansion';
import { ChildsService } from 'src/app/Shared/services/firebase-services/child.service';
  
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() data;
  userForm: FormGroup;
  child: child = new child();
  tabchilds: any;
  tabchildsindex: any

   uid:any
  panelOpenState = false;
  constructor( 
    private formBuilder: FormBuilder,
    public childsService:ChildsService 
    )  { }
  selected = 'option2';


  ngOnInit(): void {
    this.userForm = new FormGroup({});
    this.userForm = this.createUserModelForm();
    this.uid=localStorage.getItem('uid')

    this.getChilds()

  }
 
  getChilds(){
    this.childsService.getChilds(this.uid).subscribe((item: any) => {
       this.tabchilds = item
       
      // if (item != undefined) {
      //   this.formParentsService = this.createUserModelForm();
     // }
     console.log("tacke ",item.lenght)
    })
  } 
  
  onSubmit(userForm) {
    console.log(userForm.value)
     this.childsService.creatChild(this.uid,userForm.value);

  }

  createUserModelForm() {
    return this.formBuilder.group({
      // name: [this.child.name],
      nom: [this.child.nom],
      prenon: [this.child.prenon],
      date: [this.child.date],
      scolaire: [this.child.scolaire = "Niveau..."],
      genre: [this.child.genre = "Masculin"],
      
      Math: [this.child.Math],
      formulepresentiel: [this.child.formulepresentiel = "F-P-1"],
      format: [this.child.format = "F-1"],
      formuleEnLinge: [this.child.formuleEnLinge = "F-L-1"],

      Physiquechime: [this.child.Physiquechime],
      formulepresentiel1: [this.child.formulepresentiel1 = "F-P-1"],
      format1: [this.child.format1 = "F-1"],
      formuleEnLinge1: [this.child.formuleEnLinge1 = "F-L-1"],


      Français: [this.child.Français],
      formulepresentiel2: [this.child.formulepresentiel2 = "F-P-1"],
      format2: [this.child.format2 = "F-1"],
      formuleEnLinge2: [this.child.formuleEnLinge2 = "F-L-1"],

      Anglais: [this.child.Anglais],
      formulepresentiel3: [this.child.formulepresentiel3 = "F-P-1"],
      format3: [this.child.format3 = "F-1"],
      formuleEnLinge3: [this.child.formuleEnLinge3 = "F-L-1"],


      Lundi: [this.child.Lundi],
      Lundi1: [this.child.Lundi1],
      Mardi: [this.child.Mardi],
      Mardi1: [this.child.Mardi1],
      Mercredi: [this.child.Mercredi],
      Mercredi1: [this.child.Mercredi1],
      Jeudi: [this.child.Jeudi],
      Jeudi1: [this.child.Jeudi1],
      Vendredi: [this.child.Vendredi],
      Vendredi1: [this.child.Vendredi],
      Samedi: [this.child.Samedi],
      Samedi1: [this.child.Samedi],
      Dimanche: [this.child.Dimanche],
      Dimanche1: [this.child.Dimanche1],

    });
  }
  opencard1: boolean = false
  opencard2: boolean = false
  opencard3: boolean = false
  opencard4: boolean = false


  open(id) {
    if (id == 'math') {
      this.opencard1 = !this.opencard1
    }
    else if (id == 'Physique') {
      this.opencard2 = !this.opencard2
    }
    else if (id == 'francias') {
      this.opencard3 = !this.opencard3
    } else if (id == 'anglais') {
      this.opencard4 = !this.opencard4
    }
  }

}

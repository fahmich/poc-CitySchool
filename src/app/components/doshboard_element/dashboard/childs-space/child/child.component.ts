import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { child } from 'src/app/Shared/models/child';
 
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() data;
  userForm: FormGroup;
  child: child = new child();
  constructor(
  private formBuilder: FormBuilder,
  
  ) {  }
   selected = 'option2';


  ngOnInit(): void {
    this.userForm = new FormGroup({});
    this.userForm = this.createUserModelForm();

  }
  createUserModelForm() {
    return this.formBuilder.group({
      Anglais: [this.child.Anglais],
      AnglaisEnLinge: [this.child.AnglaisEnLinge],
      Anglaisch: [this.child.Anglaisch],
      Anglaisformat: [this.child.Anglaisformat],
      Français: [this.child.Français],
      FrançaisEnLinge: [this.child.FrançaisEnLinge],
      Françaisformat: [this.child.Françaisformat],
      Math: [this.child.Math],
      Physiquechime: [this.child.Physiquechime],
      checkboxfr: [this.child.checkboxfr],
      date: [this.child.date],
      format: [this.child.format],
      formuleEnLinge: [this.child.formuleEnLinge],
      formulepresentiel: [this.child.formulepresentiel],
      genre: [this.child.genre],
      // name: [this.child.name],
      nom: [this.child.nom],
      physquechimie: [this.child.physquechimie],
      physquechimieEnLinge: [this.child.physquechimieEnLinge],
      physquechimieformat: [this.child.physquechimieformat],
      prenon: [this.child.prenon],
      scolaire: [this.child.scolaire],
      Lundi   : [this.child.Lundi],
      Lundi1  : [this.child.Lundi1],
      Mardi  : [this.child.Mardi],
      Mardi1 : [this.child.Mardi1],
       Mercredi : [this.child.Mercredi],
       Mercredi1 : [this.child.Mercredi1],
       Jeudi : [this.child.Jeudi],
       Jeudi1: [this.child.Jeudi1],
       Vendredi : [this.child.Vendredi],
       Vendredi1 : [this.child.Vendredi],
       Samedi  : [this.child.Samedi],
       Samedi1 : [this.child.Samedi],
       Dimanche : [this.child.Dimanche],
       Dimanche1 : [this.child.Dimanche1],

     

    
    });
  }
  opencard1:boolean=false
  opencard2:boolean=false
  opencard3:boolean=false
  opencard4:boolean=false
  onSubmit(UserForm) {
    console.log(UserForm.value)
  }


  open(id){
    if(id=='math'){
      this.opencard1=! this.opencard1
    }
    else if(id=='Physique'){
      this.opencard2=! this.opencard2
    }
    else if(id=='francias'){
      this.opencard3=! this.opencard3
    } else if(id=='anglais'){
      this.opencard4=! this.opencard4
    }
  }

 
}

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
  childForm: FormGroup;
  child: child = new child();
  
  tabchilds: any;
  tabchildsindex: any

  uid: any
  panelOpenState = false;
  constructor(
    private formBuilder: FormBuilder,
    public childsService: ChildsService
  ) { }
  selected = 'option2';


  ngOnInit(): void {
  

    this.childForm = new FormGroup({});
    this.child=this.data
        this.childForm = this.createUserModelForm();
    this.uid = localStorage.getItem('uid')

    this.getChilds()

  }
// -------doie etre parent child--------------------
  getChilds() {
    this.childsService.getChilds(this.uid).subscribe((item: any) => {
   //this.child = item[0]
   this.tabchilds= item
   if(this.child  !=undefined){
    this.childForm = this.createUserModelForm();
   }
     // console.log("this tabs item:" ,item)
     // console.log(this.child)
    })
  }
// ------------------------------
  onSubmit(childForm) {
    //console.log(childForm.value)
    this.childsService.creatChild(this.uid, childForm.value,this.child.codeChild);
  }
  deleteChild() {
    this.childsService.deleteChild(this.uid,this.child.codeChild);
  }

  createUserModelForm() {
    return this.formBuilder.group({
      nom: [this.child.nom],
      prenom: [this.child.prenom],
      date: [this.child.date],
      scolaire: [this.child.scolaire],
      genre: [this.child.genre ],
      prix: [this.child.prix],

      math: [this.child.math],
      formulepresentiel: [this.child.formulepresentiel],
      format: [this.child.format ],
      formuleEnLinge: [this.child.formuleEnLinge ],

      physiquechime: [this.child.physiquechime],
      formulepresentiel1: [this.child.formulepresentiel1 ],
      format1: [this.child.format1  ],
      formuleEnLinge1: [this.child.formuleEnLinge1  ],

      français: [this.child.français],
      formulepresentiel2: [this.child.formulepresentiel2 ],
      format2: [this.child.format2 ],
      formuleEnLinge2: [this.child.formuleEnLinge2  ],

      anglais: [this.child.anglais],
      formulepresentiel3: [this.child.formulepresentiel3  ],
      format3: [this.child.format3 ],
      formuleEnLinge3: [this.child.formuleEnLinge3  ],

      lundi: [this.child.lundi],
      lundi1: [this.child.lundi1],
      mardi: [this.child.mardi],
      mardi1: [this.child.mardi1],
      mercredi: [this.child.mercredi],
      mercredi1: [this.child.mercredi1],
      jeudi: [this.child.jeudi],
      jeudi1: [this.child.jeudi1],
      vendredi: [this.child.vendredi],
      vendredi1: [this.child.vendredi],
      samedi: [this.child.samedi],
      samedi1: [this.child.samedi],
      dimanche: [this.child.dimanche],
      dimanche1: [this.child.dimanche1],

    });
  }
  opencard: boolean = false
  opencard1: boolean = false
  opencard2: boolean = false
  opencard3: boolean = false
  opencard4: boolean = false


  open(id) {
    if (id == 'B1') {
      this.opencard1 = !this.opencard1
    }
    else if (id == 'B2') {
      this.opencard2 = !this.opencard2
    }
    else if (id == 'B3') {
      this.opencard3 = !this.opencard3
    } else if (id == 'B4') {
      this.opencard4 = !this.opencard4
    } else if (id == 'C1') {
      this.opencard = !this.opencard
    }

  }

}

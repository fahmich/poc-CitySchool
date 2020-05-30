import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() data;
  workedDays = [{ day: "", morning: "", afterNoon: "" }]
  constructor() {
    this.workedDays = [
      { day: "Lundi", morning: "1", afterNoon: "2" },
      { day: "Mardi", morning: "3", afterNoon: "4'" },
      { day: "Mercredi", morning: "5", afterNoon: "6" },
      { day: "Jeudi", morning: "7", afterNoon: "8" },
      { day: "Vendredi", morning: "9", afterNoon: "10" },
      { day: "Samedi", morning: "11", afterNoon: "12" },
      { day: "Dimanche", morning: "13", afterNoon: "14" },
    ]
   }
   selected = 'option2';


  ngOnInit(): void {
  }
  opencard1:boolean=false
  opencard2:boolean=false
  opencard3:boolean=false
  opencard4:boolean=false


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

import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormBuilder, Validators } from "@angular/forms";
 
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
   ) { }

  ngOnInit(): void {
  }
 
}
import { Component, OnInit } from '@angular/core';
import { ContactMarqueService } from 'src/app/Shared/services/firebase-services/contact-marque.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Contact } from 'src/app/Shared/models/contact';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private contactService:ContactMarqueService,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  mainForm() {
    this.contactForm = this.fb.group({
      nom: ['', [Validators.required]],
      adress: ['', [Validators.required]],
      telephone1: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  } 

  CreateRecord(Contact:Contact) {
     
      this.contactService.creatContact(Contact);
    
     }

 
}
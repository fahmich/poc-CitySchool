import { Injectable, EventEmitter } from '@angular/core';
 import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
 
@Injectable({
    providedIn: 'root'
  })
  export class ValidationdataService {


  validation    = new BehaviorSubject(undefined);
 
  account : any;
  constructor() { }

  validation$ = this.validation.asObservable();
 
  setvalidation(validation){
    this.account = validation;
    this.validation.next(validation);
  }

  getvalidationpere(){
    return Object.assign({}, this.account);
  }
  setvalidationmerepere(validation){
    this.account = validation;
    this.validation.next(validation);
  }

  getvalidationmere(){
    return Object.assign({}, this.account);
  }
  setvalidationautre(validation){
    this.account = validation;
    this.validation.next(validation);
  }

  getvalidationautre(){
    return Object.assign({}, this.account);
  }

   
}

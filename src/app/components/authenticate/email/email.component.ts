import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/firebase-services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  codefamily:any;
  constructor(
    public authService: AuthService,
    private userService:UserService,
    public router: Router,
    public afs: AngularFirestore,   // Inject Firestore service
   ) { }

  ngOnInit(): void {
  }

  // statedoc(){
  //   const increment = firestore.FieldValue.increment(1);
  //   const statsRef = this.afs.collection('users').doc('--stats--').ref;
  //   const batch = this.afs.firestore.batch();
  //   batch.set(statsRef, { storyCount: increment }, { merge: true });
  //   batch.commit();
   
  //   //  this.afs.collection("users").doc('--stats--').valueChanges()
  //   // .subscribe((item:any)=>{  
  //   //   console.log('this item 1',item.storyCount)
  //   //    return item.storyCount
  //   //  }) 
    
  //     this.userService.getStat().subscribe((item:any)=>{
  //       //console.log('this item 1',item.storyCount)
   
  //     return item.storyCount  
       
  //      })
    
  // }
  // generateCodeFamily() {
 
  //   var year = `${(new Date()).getFullYear()}`;
  //   var code1 = year.substring(0,2);
  //   var code2= this.statedoc();
  //   console.log('this is  223', code2 );

  //   //new Promise( resolve => setTimeout(resolve, 5000));
  //   this.codefamily=`F-${code1}`+`-${code2}`;

  //   return this.codefamily 
  // }


}

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
 
}

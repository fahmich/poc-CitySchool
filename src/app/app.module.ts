import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatSliderModule } from '@angular/material/slider';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';
// Auth service
import { AuthService } from "./shared/services/auth.service";

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';
// App components
import { LoginComponent } from './components/authenticate/login/login.component';
import { DashboardComponent } from './components/doshboard_element/dashboard/dashboard.component';
 import { SignUpComponent } from './components/authenticate/sign-up/sign-up.component';
import { EmailComponent } from './components/authenticate/email/email.component';
import { NavgbarComponent } from './components/doshboard_element/navgbar/navgbar.component';
 import { ParentsSpaceComponent } from './components/doshboard_element/dashboard/parents-space/parents-space.component';
import { ChildsSpaceComponent } from './components/doshboard_element/dashboard/childs-space/childs-space.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './components/doshboard_element/dashboard/childs-space/child/child.component';
import { ParentComponent } from './components/doshboard_element/dashboard/parents-space/parent/parent.component';
 
@NgModule({
  declarations: [
    AppComponent,
     LoginComponent,
     DashboardComponent,
     SignUpComponent,
     EmailComponent,
     NavgbarComponent,
     ParentsSpaceComponent,
     ChildsSpaceComponent,
     ChildComponent,
     ParentComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'fahmidb'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

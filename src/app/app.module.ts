import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
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
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './components/doshboard_element/dashboard/childs-space/child/child.component';
 import {MatTabsModule,} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { TabContentComponent } from './components/doshboard_element/dashboard/childs-space/tab.setting/tab-content.component';
import { ContentContainerDirective } from './components/doshboard_element/dashboard/childs-space/tab.setting/content-container.directive';
import { TabService } from './Shared/services/tabs.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
 
import {MatFormFieldModule} from '@angular/material/form-field';
import { AutreComponent } from './components/doshboard_element/dashboard/parents-space/autre/autre.component';
import { MereComponent } from './components/doshboard_element/dashboard/parents-space/mere/mere.component';
import { PereComponent } from './components/doshboard_element/dashboard/parents-space/pere/pere.component';

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
     TabContentComponent,
     ContentContainerDirective,
     AutreComponent,
     MereComponent,
     PereComponent,
     
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTabsModule ,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [AuthService, TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../../shared/guard/auth.guard";

import { LoginComponent } from 'src/app/components/authenticate/login/login.component';
import { DashboardComponent } from '../../components/doshboard_element/dashboard/dashboard.component';
 import { SignUpComponent } from 'src/app/components/authenticate/sign-up/sign-up.component';
import { EmailComponent } from 'src/app/components/authenticate/email/email.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
 
  { path: 'register-user', component: SignUpComponent},

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'verify-email-address', component:  EmailComponent }


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

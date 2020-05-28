import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../../shared/guard/auth.guard";

import { LoginComponent } from 'src/app/components/login/login.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
 import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
 
  { path: 'register-user', component: SignUpComponent},

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

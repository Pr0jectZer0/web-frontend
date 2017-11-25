import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

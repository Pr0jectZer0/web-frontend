import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SignupComponent } from './auth/signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { GameLibraryComponent } from './game-library/game-library.component';
import { GameDetailComponent } from './game-library/game-detail/game-detail.component';
import {GroupProfileComponent} from './groups/group-profile/group-profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'library', component: GameLibraryComponent, canActivate: [AuthGuard], children: [
    {path: ':id', component: GameDetailComponent},
  ]},
  { path: 'group-profile', component: GroupProfileComponent},
  { path: 'not-found', component: ErrorPageComponent, },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

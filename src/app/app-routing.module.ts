import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SignupComponent } from './auth/signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';
import {GameLibraryComponent} from './game-library/game-library.component';
import {GameDetailComponent} from './game-library/game-detail/game-detail.component';
import {ChatsComponent} from './chats/chats.component';
import {ChatComponent} from './chats/chat/chat.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'library', component: GameLibraryComponent, children: [
      { path: ':id', component: GameDetailComponent },
    ]},
  { path: 'chat', component: ChatsComponent, canActivate: [AuthGuard] },
  { path: 'chat/:id', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

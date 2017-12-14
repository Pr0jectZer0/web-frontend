///<reference path="game-library/game-start/game-start.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import { GameLibraryComponent } from './game-library/game-library.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import {DisableService} from './shared/disable.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './auth/auth-guard.service';
import {GameListComponent} from "./game-library/game-list/game-list.component";
import {GameDetailComponent} from "./game-library/game-detail/game-detail.component";
import {GameItemComponent} from "./game-library/game-list/game-item/game-item.component";
import {LibraryService} from "./game-library/library.service";
import {UsersService} from './shared/users.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    ErrorPageComponent,
    SigninComponent,
    GameLibraryComponent,
    FriendlistComponent,
    GameListComponent,
    GameDetailComponent,
    GameItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsersService,
    DisableService,
    LibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { FriendlistComponent } from './friendlist/friendlist.component';
import {DisableService} from './shared/disable.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    ErrorPageComponent,
    SigninComponent,
    FriendlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    DisableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

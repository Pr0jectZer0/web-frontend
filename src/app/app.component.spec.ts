import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FriendlistComponent } from './friendlist/friendlist.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {GameLibraryComponent} from './game-library/game-library.component';
import {GameDetailComponent} from './game-library/game-detail/game-detail.component';
import {GameListComponent} from './game-library/game-list/game-list.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DisableService} from './shared/disable.service';
import {UsersService} from './shared/users.service';
import {LibraryService} from './game-library/library.service';
import {AuthService} from './auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './auth/auth-guard.service';
import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        { provide: APP_BASE_HREF, useValue: '/' },
        AuthService,
        AuthGuard,
        UsersService,
        DisableService,
        LibraryService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});

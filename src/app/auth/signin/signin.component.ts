import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {isEmailValid} from "../../shared/is-email-valid.directive";
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  error: string;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, isEmailValid.bind(this)]),
      'password': new FormControl(null, [Validators.required])
    });

    this.authService.error.subscribe((err: string) => {
      this.error = err;
    });

    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/game-library']);
    }
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }
}

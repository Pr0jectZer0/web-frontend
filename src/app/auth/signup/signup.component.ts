import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {isEmailValid} from "../../shared/is-email-valid.directive";

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  passwords: FormGroup;
  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.passwords = new FormGroup({
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'repeat': new FormControl('', [Validators.required])
    }, {validators: SignupComponent.isPasswordMatching});

    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'email': new FormControl(null, [Validators.required, Validators.email, isEmailValid.bind(this)]),
      'passwords': this.passwords
    });

    this.authService.error.subscribe((err: string) => {
      this.error = err;
    });
  }

  onSignup() {
    const username = this.signupForm.get('username').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('passwords.password').value;

    this.authService.signupUser(username, email, password);
  }

  static isPasswordMatching(control: FormGroup): {[s: string]: boolean} {
    if(control == null) return null;
    return control.get('repeat').value === control.get('password').value ? null : {'notMatching': true};
  }
}

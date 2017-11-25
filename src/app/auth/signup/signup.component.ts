import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  passwords: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.passwords = new FormGroup({
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'repeat': new FormControl('', [Validators.required])
    }, {validators: SignupComponent.isPasswordMatching});

    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'passwords': this.passwords
    });
  }

  onSignup() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('passwords.password').value;

    console.log(password);

    this.authService.signupUser(email, password);
  }

  static isPasswordMatching(control: FormGroup): {[s: string]: boolean} {
    if(control == null) return null;
    return control.get('repeat').value == control.get('password').value ? null : {'notMatching': true};
  }
}

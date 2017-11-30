import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
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
      'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'email': new FormControl(null, [Validators.required, Validators.email, SignupComponent.isEmailValid.bind(this)]),
      'passwords': this.passwords
    });
  }

  onSignup() {
    const username = this.signupForm.get('username').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('passwords.password').value;

    console.log(password);

    this.authService.signupUser(username, email, password);
  }

  static isEmailValid(control: FormControl): {[s: string]: boolean} {
    if (control.value != null && !control.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      return {'emailInvalid': true}
    }

    return null;
}

  static isPasswordMatching(control: FormGroup): {[s: string]: boolean} {
    if(control == null) return null;
    return control.get('repeat').value == control.get('password').value ? null : {'notMatching': true};
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passwords: FormGroup;

  constructor() { }

  ngOnInit() {
    this.passwords = new FormGroup({
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'repeat': new FormControl('', [Validators.required])
    }, {validators: RegisterComponent.isPasswordMatching});

    this.registerForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'passwords': this.passwords
    });
  }

  onSubmit() {
    console.log(this.registerForm);
    this.registerForm.reset();
  }

  static isPasswordMatching(control: FormGroup): {[s: string]: boolean} {
    if(control == null) return null;
    return control.get('repeat').value == control.get('password').value ? null : {'notMatching': true};
  }
}

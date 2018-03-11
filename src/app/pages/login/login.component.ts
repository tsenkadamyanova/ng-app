import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../../shared/animations/animations';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  // host: { '[@fadeInAnimation]': '' },
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  public hidePassword = true; // used to show or hide the password as text
  public loginForm: FormGroup;

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  public ngOnInit(): void {
    console.log(this.loginForm.controls);
  }

  /**
   * Create login form fields
   *
   * @memberof LoginComponent
   */
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

}

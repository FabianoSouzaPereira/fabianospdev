import { Component, Injector, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from "@angular/forms";

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Login } from '../shared/login.model';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent extends BaseResourceFormComponent<Login> implements OnInit {

  pageTitle: string;

  constructor(
    protected loginService: LoginService,
    protected injector: Injector) {
    super(injector, new Login(), loginService, Login.fromJson);

    this.pageTitle = 'Login';
  }

  ngOnInit(): void {
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      name: [ null, [ Validators.required, Validators.minLength(2) ] ],
      email: [ null, [ Validators.required, Validators.minLength(2) ] ],
      password: [ null, [ Validators.required, Validators.minLength(2) ] ]
    });
  }

}

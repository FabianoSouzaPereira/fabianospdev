import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseResourceService<Login>{

  private login: boolean = false;

  constructor(protected injector: Injector) {
    super('api/logins', injector, Login.fromJson)
  }

  isAuthenticated() {
    if (this.login == true) {
      return true
    }

    return false;
  }
}

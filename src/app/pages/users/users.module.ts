import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [ UserListComponent, UserFormComponent ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

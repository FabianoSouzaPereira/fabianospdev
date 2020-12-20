import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PersonalsRoutingModule } from './personals-routing.module';
import { PersonalListComponent } from './personal-list/personal-list.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';


@NgModule({
  declarations: [ PersonalListComponent, PersonalFormComponent ],
  imports: [
    SharedModule,
    PersonalsRoutingModule
  ]
})
export class PersonalsModule { }

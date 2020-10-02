import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalsRoutingModule } from './personals-routing.module';
import { PersonalListComponent } from './personal-list/personal-list.component';


@NgModule({
  declarations: [PersonalListComponent],
  imports: [
    CommonModule,
    PersonalsRoutingModule
  ]
})
export class PersonalsModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CellsRoutingModule } from './cells-routing.module';
import { CellListComponent } from './cell-list/cell-list.component';
import { CellFormComponent } from './cell-form/cell-form.component';


@NgModule({
  declarations: [ CellListComponent, CellFormComponent ],
  imports: [
    SharedModule,
    CellsRoutingModule
  ]
})
export class CellsModule { }

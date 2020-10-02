import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CellsRoutingModule } from './cells-routing.module';
import { CellListComponent } from './cell-list/cell-list.component';


@NgModule({
  declarations: [ CellListComponent ],
  imports: [
    SharedModule,
    CellsRoutingModule
  ]
})
export class CellsModule { }

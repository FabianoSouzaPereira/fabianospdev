import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellsRoutingModule } from './cells-routing.module';
import { CellListComponent } from './cell-list/cell-list.component';


@NgModule({
  declarations: [CellListComponent],
  imports: [
    CommonModule,
    CellsRoutingModule
  ]
})
export class CellsModule { }

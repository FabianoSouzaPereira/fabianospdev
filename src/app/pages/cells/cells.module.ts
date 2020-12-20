import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellsRoutingModule } from './cells-routing.module';
import { CellListComponent } from './cell-list/cell-list.component';


@NgModule({
<<<<<<< Updated upstream
  declarations: [CellListComponent],
=======
  declarations: [ CellListComponent, CellFormComponent ],
>>>>>>> Stashed changes
  imports: [
    CommonModule,
    CellsRoutingModule
  ]
})
export class CellsModule { }

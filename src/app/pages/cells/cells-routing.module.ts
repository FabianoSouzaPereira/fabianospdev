import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CellListComponent } from './cell-list/cell-list.component';

const routes: Routes = [
  { path: '', component: CellListComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CellsRoutingModule { }

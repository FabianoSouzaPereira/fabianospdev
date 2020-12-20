import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CellFormComponent } from './cell-form/cell-form.component';
import { CellListComponent } from './cell-list/cell-list.component';


const routes: Routes = [
  { path: '', component: CellListComponent },
  { path: 'new', component: CellFormComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CellsRoutingModule { }

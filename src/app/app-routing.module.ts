import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'cells', loadChildren: './pages/cells/cells.module#CellsModule' },
  { path: 'personals', loadChildren: './pages/personals/personals.module#PersonalsModule' },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

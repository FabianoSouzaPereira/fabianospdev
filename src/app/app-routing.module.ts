import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  {
    path: 'cells', loadChildren: './pages/cells/cells.module#CellsModule',

  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'personals', loadChildren: './pages/personals/personals.module#PersonalsModule' },
  { path: 'users', loadChildren: './pages/users/users.module#UsersModule' },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

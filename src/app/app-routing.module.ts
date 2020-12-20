import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream
=======
import { AuthGuardService } from './core/guards/auth-guard.service';
import { NotfoundComponent } from './pages/notfound/notfound.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  {
    path: 'cells', loadChildren: './pages/cells/cells.module#CellsModule',
    canActivate: [ AuthGuardService ]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'personals', loadChildren: './pages/personals/personals.module#PersonalsModule' },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

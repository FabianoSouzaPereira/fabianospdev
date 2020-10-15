import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellsModule } from './pages/cells/cells.module';
import { PersonalsModule } from './pages/personals/personals.module';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { LoginModule } from './pages/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CellsModule,
    PersonalsModule,
    HomeModule,
    UsersModule,
    LoginModule
  ],
  providers: [ AuthGuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

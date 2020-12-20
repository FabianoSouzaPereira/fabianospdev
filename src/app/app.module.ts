import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CellsModule } from './pages/cells/cells.module';
import { PersonalsModule } from './pages/personals/personals.module';
import { HomeModule } from './pages/home/home.module';
<<<<<<< Updated upstream
=======
import { UsersModule } from './pages/users/users.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { LoginModule } from './pages/login/login.module';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CellsModule,
    PersonalsModule,
<<<<<<< Updated upstream
    HomeModule
=======
    HomeModule,
    UsersModule,
    LoginModule
>>>>>>> Stashed changes
  ],
  providers: [ AuthGuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

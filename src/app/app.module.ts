import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CellsModule } from './pages/cells/cells.module';
import { PersonalsModule } from './pages/personals/personals.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CellsModule,
    PersonalsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

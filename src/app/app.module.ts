import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero.module';
import { DbzModule } from './proyectos/dbz/dbz.module';
import { appTareasModule } from './proyectos/app-tareas/app-tareas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CounterModule,
    HeroModule,
    DbzModule,
    appTareasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

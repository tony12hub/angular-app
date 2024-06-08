import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './pages/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';




@NgModule({
  declarations:[
    MainPageComponent,
    ListadoComponent,
    FormularioComponent
],
exports:[
    MainPageComponent
],
imports:[
    CommonModule,
    FormsModule
]
})
export class DbzModule { }

import { NgModule } from "@angular/core";
import { AppTareasComponent } from "./app-tareas.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TareasComponent } from "./components/tareas/tareas.component";



@NgModule({
    declarations:[
        AppTareasComponent,
        NavbarComponent,
        TareasComponent
    ],
    exports:[
        AppTareasComponent
    ]
})
export class appTareasModule{

}
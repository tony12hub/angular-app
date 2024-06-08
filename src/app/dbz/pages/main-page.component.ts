import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";



@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']

})

export class MainPageComponent {

    constructor( public servico: DbzService) { }

    public tituloLista:string = "Listado de personajes";

    get characters():Character[]{
        return [...this.servico.personajes]
    }
    onDelete(id:string):void{
        this.servico.eliminarById(id)
    }
    // get personaje():Character {
    //     return this.servico.aux
    // }

}
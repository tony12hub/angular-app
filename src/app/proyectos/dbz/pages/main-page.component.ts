import { Component, Input } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dragonballz.service";

@Component({
    selector: 'dragon-ball-app',
    templateUrl: './main-page.component.html'
})

export class DragonBall{

    constructor(private DbzService:DbzService) {}

    public nameList:string = "Listado de Personajes";

    get personajes():Character[]{
        return [... this.DbzService.Characters]
    }

    onDeleteCharacter(id:string):void{
        this.DbzService.onDeleteById(id)
    }

    agregarPersonaje(character:Character):void{
        this.DbzService.onNewCharacter(character)
    }
}
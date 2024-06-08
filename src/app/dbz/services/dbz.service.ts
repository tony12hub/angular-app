import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import {v4 as uuid} from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    
    public personajes:Character[] = [
        {
            id: uuid(),
            name: 'krilin',
            power: 800
        },{
            id: uuid(),
            name: 'goku',
            power: 10000
        },{
            id: uuid(),
            name:'vegeta',
            power: 12000
        },{
            id: uuid(),
            name: 'jiren',
            power: 90000
        },{
            id: uuid(),
            name: 'wiss',
            power:500000
        }
    ];
    public aux:Character[] = this.personajes;

    obtenerPersonaje(personaje:Character):void {
        const newCharacter: Character = { ...personaje,id:uuid() }   
        this.personajes.push(newCharacter);
    }
    
    eliminarById(id:string){
        this.personajes = this.personajes.filter(personaje => personaje.id !== id)
    }

    obtener(id:String){
        this.aux = this.personajes.filter(item=> item.id === id);
        console.log("obeto",this.aux);
        return this.aux;
    }

}
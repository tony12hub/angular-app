import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from "uuid"

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    

    public Characters :Character[] = [
        {
            id:uuid(),
            name:'goku',
            power:1000
        },
        {
            id:uuid(),
            name: 'vegeta',
            power:9000
        },
        {
            id:uuid(),
            name:'trunks',
            power:5000
        },
        {
            id:uuid(),
            name:'bills',
            power:30000
        },
        {
            id:uuid(),
            name:'wiss',
            power:60000
        }
    ]; 


    onNewCharacter(character:Character):void{
        const onNewCharacter:Character = {
            id:character.id,
            name:character.name,
            power: character.power
        }
        this.Characters.push(onNewCharacter)
        console.log(this.Characters)
    }
    onDeleCharacter(index:number):void{
        console.log({index})
        this.Characters.splice(index,1)
    }
    onDeleteById(id:string):void{
        this.Characters = this.Characters.filter(item => item.id !== id)
    }
}
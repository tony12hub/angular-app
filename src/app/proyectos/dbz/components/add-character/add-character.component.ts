import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from "uuid"

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public OnNewCharacter:EventEmitter<Character> = new EventEmitter()


  public Character:Character = {
    id:uuid(),
    name: '',
    power: 0
  }

  EmitCharacter():void{
    console.log(this.Character);
    if(this.Character.name.length===0)return;
    this.OnNewCharacter.emit({...this.Character})
    this.Character.name='';
    this.Character.power=0;
    this.Character.id= uuid()
  }
}

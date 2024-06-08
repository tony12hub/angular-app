import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  @Input()
  public pers:Character[] = []


  public Personaje:Character = {
    id: uuid(),
    name: '',
    power: 0
  };
  
  enviar():void{
    if(this.Personaje.name.length === 0) return;

    this.onNewCharacter.emit({...this.Personaje});
    
    this.Personaje.name = ''; 
    this.Personaje.power = 0;
    this.Personaje.id = uuid()
  }



}



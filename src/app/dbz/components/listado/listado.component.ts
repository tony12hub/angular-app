import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Input()
  public lista:Character[] = []

  @Input()
  public titulo:string = '---';
    
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  @Output()
  public mod: EventEmitter<string> = new EventEmitter();

  onDeletePersoanje(index?:string):void{
    //TODO: Emitir ID
    if(!index)return;
    this.onDelete.emit(index)
  }

  modificar(index:string):void{
    if(!index)return;
    this.mod.emit(index);
    return;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes:string[]  = ["ironamn", "hulk", "thor", "spider man"];

  heroeborrado:string | undefined;

  borrar():void{
    this.heroeborrado = this.heroes.pop();
  } 

  reset():void{
    this.heroes = ["ironamn", "hulk", "thor", "spider man"];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {


    public name:String = "anthony";
    public age:string  = "25";

    persona():string{
      return `${this.name} - ${this.age}`
    }

}

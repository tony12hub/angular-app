import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title:string = "mi primera app";
  public nunero:number = 0;


  increaseBy():void{
    this.nunero++;
  }
  decreBy(): void{
    this.nunero--;
  }

  reset():void{
    this.nunero=0;
  }
  
}


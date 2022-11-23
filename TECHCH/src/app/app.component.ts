import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'textch';
  
  upper!:string;
  lower!:string;
  str!:string;

  changetoupper()
  {
    this.upper = this.str.toUpperCase();
    this.lower = this.str.toLowerCase();
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'datetime';
  
  date!:Date;
  getdate(){
    setInterval(() =>{
      this.date = new Date()},100)
  }
}



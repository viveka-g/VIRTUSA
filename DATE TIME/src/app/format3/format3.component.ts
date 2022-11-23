import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format3',
  templateUrl: './format3.component.html',
  styleUrls: ['./format3.component.css']
})
export class Format3Component implements OnInit {

  constructor() {
    setInterval(() =>{
    this.date = new Date()},100)
   }

  ngOnInit(): void {
  }

  date!:Date;
  getdate(){
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format1',
  templateUrl: './format1.component.html',
  styleUrls: ['./format1.component.css']
})
export class Format1Component implements OnInit {

  constructor() {
    setInterval(() =>{
      this.date = new Date()},100)
   }

  ngOnInit(): void 
  {
    
  }
  date!:Date;
  }

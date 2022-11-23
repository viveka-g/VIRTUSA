import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format2',
  templateUrl: './format2.component.html',
  styleUrls: ['./format2.component.css']
})

export class Format2Component implements OnInit {

  constructor() { 
    setInterval(() =>{
    this.date = new Date()},100)
  }

  ngOnInit(): void {
  }

  date!:Date;
}

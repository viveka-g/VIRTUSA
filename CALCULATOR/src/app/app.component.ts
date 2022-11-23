import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scalculator';
  
  display = '0';
  firstvalue!: number;
  result: number=0;
  action !:string;
  flag = 0;


  numclick(val: number)
  {
      if(this.flag == 1)
      {
        this.display = '0';
        this.flag=0;
      }
    
      if(this.display === '0' || this.display === '+' || this.display === '-'|| this.display === '*' || this.display === '/') {
        this.display = val.toString();
      }
      else if(this.display == "00")
      {
        this.display = ' ';
      }
      else{
        this.display = `${this.display}${val}`;
        
      }    
  }

  oper(operator: any)
  {
    if(this.result == 0)
    {
      this.firstvalue = parseFloat(this.display);
      this.action = operator;
      this.display = operator.toString();
    }
    else
    {
      this.firstvalue = this.result;
    }
  }

  calculate()
  {
    debugger;
    const a = this.firstvalue;
    const b = parseFloat(this.display);
    
    let result=0;

    if(this.action == '+')
    {
        result = a+b;
    }

    else if(this.action == '-')
    {
        result = a-b;
    }

    else if(this.action == '*')
    {
        result = a*b;
    }
    else if(this.action == '/')
    {
        result = a/b;
    }
    
    this.result != result!;
    this.display = result.toString();
    this.flag =1;
  }
}

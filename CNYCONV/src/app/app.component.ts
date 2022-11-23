import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cnyconv';
  
  input1!:number;
  Result?:number;
  
  calculate(fc:string,tc:string)
  {
    if(fc=="inr" && tc=="usd")
    {
      this.Result = (this.input1*0.012);
    }

    else if(fc=="inr" && tc=="eur")
    {
      this.Result = (this.input1*0.013);
    }

    else if(fc=="inr" && tc=="aud")
    {
      this.Result = (this.input1*0.019);
    }

    
    else if(fc=="usd" && tc=="inr")
    {
      this.Result = (this.input1*82.32);
    }
    else if(fc=="usd" && tc=="eur")
    {
      this.Result = (this.input1*1.03);
    }
    else if(fc=="usd" && tc=="aud")
    {
      this.Result = (this.input1*1.60);
    }

    
    else if(fc=="eur" && tc=="inr")
    {
      this.Result = (this.input1*79.95);
    }
    else if(fc=="eur" && tc=="usd")
    {
      this.Result = (this.input1*0.97);
    }
    else if(fc=="eur" && tc=="aud")
    {
      this.Result = (this.input1*1.55);
    }


  
    else if(fc=="aud" && tc=="inr")
    {
      this.Result = (this.input1*51.69);
    }
    else if(fc=="aud" && tc=="usd")
    {
      this.Result = (this.input1*0.6365);
    }
    else if(fc=="aud" && tc=="eur")
    {
      this.Result = (this.input1*0.65);
    }

    else if((fc=="inr" && tc=="inr") || (fc=="usd" && tc=="usd") || (fc=="eur" && tc=="eur") || (fc=="aud" && tc=="aud"))
    {
      this.Result = this.input1;
    }
    




    
  }
}

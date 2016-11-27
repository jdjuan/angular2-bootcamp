import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  expression:string="";

  constructor() { }

  ngOnInit() {
  }

  OnClick(value:any){
    this.expression += value;
  }
  
  evalExpression(){
    this.expression = eval(this.expression);
  }


  clearExpression(){
    this.expression = "";
  }
}

import { ICalculator } from './shared/definitions/calculator.service';
import { CalculatorService } from './shared/calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  expression: string= '';

  constructor(private myService: ICalculator) { }

  ngOnInit() {
  }
  
  evalExpression(){
    this.expression =  this.myService.getResult();
  }


  clearExpression(){
    this.expression = this.myService.clearResult();
  }
}



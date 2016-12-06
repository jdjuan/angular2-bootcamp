import { ICalculator } from './definitions/calculator.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService implements ICalculator {
  private theExpression: string = '';
  private validExpression = /^[\d\+\/\*\.\- \(\)]*$/;

  constructor() { }

  public addOperation(operation: string) {
    let isValid = this.validExpression.test(operation);

    if (isValid) {
      this.theExpression += operation;
      console.log(this.theExpression);
    }

  }

  public getResult(): string {
    try {
      return eval(this.theExpression);
    } catch (e) {
      return 'Error';
    }
  }

  public clearResult(): string {
    return this.theExpression = '';
  }

}



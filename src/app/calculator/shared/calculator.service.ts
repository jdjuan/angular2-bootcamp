import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
  private theExpression: string = '';
  private validExpression = /^[\d\+\/\*\.\- \(\)]*$/;

  constructor() { }

  public addOperation(operation: string) {
    debugger
    let isValid = this.validExpression.test(operation);

    if (isValid) {
      this.theExpression += operation;
      console.log(this.theExpression);
    }

  }

  public getResult(): string {
    debugger
    try {
      return eval(this.theExpression);
    } catch (e) {
      return "Error";
    }
  }

  public clearResult():string {

    debugger
    return this.theExpression = "";
  }

}



import { ILogger } from './../../core/definitions/logger.service';
import { ICalculator } from './definitions/calculator.service';
import { Injectable,Inject } from '@angular/core';

@Injectable()
export class CalculatorService implements ICalculator {
  private theExpression: string = '';
  private validExpression = /^[\d\+\/\*\.\- \(\)]*$/;

  constructor(@Inject('ILogger') private logger:ILogger) { }

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
      this.logger.logError("Invalid expression found");
      return 'Error';
    }
  }

  public clearResult(): string {
    return this.theExpression = '';
  }

}



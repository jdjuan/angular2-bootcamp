import { ILogger } from './definitions/logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService implements ILogger{

    constructor() { }

    public logError(error: string){
      console.log("%cProduction error",'background: red; color: #fafafa');
    }
}
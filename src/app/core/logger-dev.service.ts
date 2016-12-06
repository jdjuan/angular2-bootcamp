import { ILogger } from './definitions/logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerDevService implements ILogger{

    constructor() { }

    public logError(error: string){
        console.log('%c ' + error, 'background: #222; color: #bada55');
    }
}
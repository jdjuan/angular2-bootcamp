import { ICalculator } from './../definitions/calculator.service';
import { Component } from '@angular/core';
import {ButtonComponent} from './button.component'

@Component(Object.assign({
    selector: 'button-success',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.css']
}, ButtonComponent.metaData))
export class SuccessButton extends ButtonComponent {
    constructor(calService: ICalculator) { 
        super('btn-success', calService);
    }

    ngOnInit() { 
        super.ngOnInit();
    }
}

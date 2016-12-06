import { ICalculator } from './../definitions/calculator.service';
import { Component } from '@angular/core';
import {ButtonComponent} from './button.component'

@Component(Object.assign({
    selector: 'button-warning',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.css']
}, ButtonComponent.metaData))
export class WarningButton extends ButtonComponent {
    constructor(calService: ICalculator) { 
        super('btn-warning', calService);
    }

    ngOnInit() { 
        super.ngOnInit();
    }
}

import { ICalculator } from './../definitions/calculator.service';
import { Component } from '@angular/core';
import {ButtonComponent} from './button.component'

@Component(Object.assign({
    selector: 'button-danger',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.css']
}, ButtonComponent.metaData))
export class DangerButton extends ButtonComponent {
    constructor(calService: ICalculator) { 
        super('btn-danger', calService);
    }

    ngOnInit() { 
        super.ngOnInit();
    }
}

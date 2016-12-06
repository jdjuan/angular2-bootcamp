import { ICalculator } from './../definitions/calculator.service';
import { Component, Inject} from '@angular/core';
import {ButtonComponent} from './button.component'

@Component(Object.assign({
    selector: 'button-primary',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.css']
}, ButtonComponent.metaData))
export class PrimaryButton extends ButtonComponent {
    constructor(@Inject('ICalculator') calService: ICalculator) { 
        super('btn-primary', calService);
    }

    ngOnInit() { 
        super.ngOnInit();
    }
}
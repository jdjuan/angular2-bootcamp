import { Component, OnInit } from '@angular/core';
import {ButtonComponent} from './button.component'

@Component(Object.assign({
    selector: 'button-warning',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.css']
}, ButtonComponent.metaData))
export class WarningButton extends ButtonComponent {
    constructor() { 
        super("btn-warning");
    }

    ngOnInit() { 
        super.ngOnInit();
    }
}

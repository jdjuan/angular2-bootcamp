import { CalculatorService } from './../calculator.service';
import { Component, OnInit, Input,Optional,Output,EventEmitter } from '@angular/core';


export class ButtonComponent implements OnInit {
 // To be added to the child component's Component metadata
  static metaData = {
    inputs: ['DisplayText'],
    outputs: ['clicked']
  };

  @Input() DisplayText:string;
  @Output() clicked= new EventEmitter<string>();
  typeClass:string;

  constructor(@Optional() bsClass:string ="btn-default",private calService:CalculatorService) { 
    this.typeClass = bsClass;
  }

  ngOnInit() {
    
  }

  OnClick(){
    debugger
    this.calService.addOperation(this.DisplayText);
    this.clicked.emit(this.DisplayText);
  }
}

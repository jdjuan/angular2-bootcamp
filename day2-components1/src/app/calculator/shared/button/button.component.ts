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

  constructor(@Optional() bsClass:string ="btn-default") { 
    this.typeClass = bsClass;
  }

  ngOnInit() {
    
  }

  OnClick(){
    this.clicked.emit(this.DisplayText);
  }
}

//modules
import { NgModule } from '@angular/core';
import { FormsModule }         from '@angular/forms';
import { CommonModule } from '@angular/common';

//components

//directives
import { HighlightDirective } from './highlight.directive';

//pipes
import { AwsomePipe } from './awsome.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AwsomePipe, HighlightDirective],
  exports: [AwsomePipe, HighlightDirective,
            CommonModule, FormsModule]
})
export class SharedModule { }

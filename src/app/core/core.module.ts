import { LoggerServiceProvider } from './logger.provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoggerServiceProvider]
})
export class CoreModule { }

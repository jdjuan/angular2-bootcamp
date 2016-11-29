import { SharedModule } from './../shared/shared.module';
//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//profile
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports:[ProfileComponent],
  declarations: [ProfileComponent]
})
export class ProfileModule { }

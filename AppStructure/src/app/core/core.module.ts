//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

//services
import { UserService } from './user.service';
import { IUserService } from './definitions/user.service';

//components
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TitleComponent],
  exports: [TitleComponent],
  providers: [
        { provide: 'IUserService', useClass: UserService },
    ],
})
export class CoreModule { }

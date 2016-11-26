import { IUserService } from './../definitions/user.service';
import { Component, OnInit, Input,Inject } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() subtitle = '';
  title = 'App Structure';
  user = '';

  constructor(@Inject('IUserService') userService: IUserService) {
    this.user = userService.userName;
  }

  ngOnInit() {
  }

}

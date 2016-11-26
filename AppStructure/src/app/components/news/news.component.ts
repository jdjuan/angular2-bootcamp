import { IUserService } from './../../services/definitions/user.service';
import { INewsService } from './../../services/definitions/news.service';
import { News } from './../../models/news';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  username = '';
  news:News[];
  private _newsService:INewsService
  
  constructor(@Inject('INewsService') newsService: INewsService,@Inject('IUserService') userService: IUserService) { 
    this._newsService = newsService;
    this.username = userService.userName;
  }

  ngOnInit() {
    this._newsService.getNews().then( news => this.news = news );
  }

}

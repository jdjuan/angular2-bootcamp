import { News } from './../../models/news';

export interface INewsService {
     getNews(): Promise<News[]>;
  }

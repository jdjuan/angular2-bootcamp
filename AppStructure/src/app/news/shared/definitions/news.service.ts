import { News } from './../news';

export interface INewsService {
     getNews(): Promise<News[]>;
  }

import { News } from './../models/news';
import { INewsService } from './definitions/news.service';
import { Injectable } from '@angular/core';

const NEWS: News[] = [
  new News("Colombia pierde 7-0", 'Por 7 autogoles de <username>, la selección Colombia pierde contra Venezuela.'),
  new News("Se roban los regalos", '<username> se roba todos los regalos de esta navidad.'),
  new News("El fin de la cerveza", '<username> responsable de la quema de todos los campos de cebeda del planeta.'),
];

const FETCH_LATENCY = 500;


@Injectable()
export class NewsService implements INewsService {

  constructor() { }

  getNews(): Promise<News[]>{
    return new Promise<News[]>(resolve => {
      setTimeout(() => { resolve(NEWS); }, FETCH_LATENCY);
    });
  }

}

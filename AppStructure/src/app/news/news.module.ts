import { NewsService } from './shared/news.service';
import { INewsService } from './shared/definitions/news.service';
//modules
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

//components
import { NewsComponent } from './news.component';
import { ReplaceActorPipe } from './shared/replace-actor.pipe';

@NgModule({
  imports: [
    SharedModule,NewsRoutingModule
  ],
  declarations: [NewsComponent, ReplaceActorPipe],
  providers: [{provide: 'INewsService', useClass : NewsService}]
})
export class NewsModule { }

 


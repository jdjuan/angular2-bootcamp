//modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

//components
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewsComponent } from './components/news/news.component';

//services
import { UserService } from './services/user.service';
import { NewsService } from './services/news.service';

//directives
import { HighlightDirective } from './directives/highlight.directive';

//pipes
import { AwsomePipe } from './pipes/awsome.pipe';
import { ReplaceActorPipe } from './pipes/replace-actor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    AwsomePipe,
    ReplaceActorPipe,
    NewsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
        { provide: 'IUserService', useClass: UserService },
        { provide: 'INewsService', useClass: NewsService },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }



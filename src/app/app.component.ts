import { Observable } from 'rxjs/Rx';
import { Component, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchFormControl:FormControl = new FormControl()
  friendsSource = ['Lucía','Fernando','German','Camilo','Alejandra', 'Juan', 'Felipe'];
  friends:Observable<string[]>;

  constructor(){
   this.friends = this.searchFormControl.valueChanges
                                .debounceTime(500)
                                .distinctUntilChanged()
                                .switchMap(value => this.getFriends(value))
                                .startWith(this.friendsSource);
  }
  
  getFriends(name:string){
    var filtered = name?  this.friendsSource.filter(friendName => friendName.toLowerCase().includes(name)): this.friendsSource;
    return  Observable.of(filtered)
  }



}

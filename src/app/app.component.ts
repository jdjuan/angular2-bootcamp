import { Person } from './person';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = new Person(1, "Juan", "Batman");
  
  onSubmit() {
    this.person = new Person(2, '', '');
  }
}

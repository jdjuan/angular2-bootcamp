import { Friend } from './friend.model';
import { Observable } from 'rxjs/Rx';
import { FriendsService } from './friends.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  friends: Observable<Friend[]>;

  constructor(private friendService: FriendsService) {

  }
  ngOnInit() {
    this.friends = this.friendService.getFriends();
  }

  findFriend(name: string) {
    this.friendService.getFriendsByName(name).subscribe(friend => console.log(friend));
  }
  
  makeRandomFriend() {
    let newFriend = new Friend(null, Math.random().toString());
    this.friendService.create(newFriend).subscribe(friend =>
      this.friends = this.friendService.getFriends() // just for reload the friends
    ) ;
  }

}

import { UserService } from './../../core/user.service';
import { Message } from './../shared/message.model';
import { ChatRoomService } from './../shared/chatroom.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit, OnDestroy {
    private timer: Observable<number>;
    private messages: Array<Message>;
    private subscription: Subscription;

    constructor(private chatService: ChatRoomService, private userService: UserService) {
        this.messages = new Array<Message>();
    }

    ngOnInit() {
        this.timer = Observable.timer(0, 1000);
        this.subscription = this.timer.subscribe(t => {
            this.chatService.getMessages().then(
                messages => this.messages = messages
            )
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    isUser(author: string) {
        return this.userService.UserName == author;
    }
}

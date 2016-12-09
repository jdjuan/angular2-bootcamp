import { UserService } from './../../core/user.service';
import { Message } from './../shared/message.model';
import { ChatRoomService } from './../shared/chatroom.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  private userName: string;
  private message: Message;
  constructor(private chatService: ChatRoomService, private userService:UserService) { }

  ngOnInit() {
    this.userName = this.userService.UserName;
    this.message =  new Message(this.userName, "");
  }

  onSubmit() {
    this.chatService.postMessage(this.message);
    this.message = new Message(this.userName, "");
  }

}

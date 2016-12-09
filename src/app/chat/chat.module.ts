import { ChatRoomService } from './shared/chatroom.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [ChatComponent, ChatWindowComponent, ChatInputComponent],
  exports: [ChatComponent],
  providers: [ChatRoomService]
})
export class ChatModule { }

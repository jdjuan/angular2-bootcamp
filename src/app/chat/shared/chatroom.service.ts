import { Message } from './message.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatRoomService {

    private messages:Array<Message>;
    constructor() { 
        this.messages  = new Array<Message>();
    }

    postMessage(message:Message){
        this.messages.push(message)
    }

    getMessages(){
        return this.messages;
    }
}
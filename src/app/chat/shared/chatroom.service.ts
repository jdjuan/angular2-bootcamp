import { Subject, Observable } from 'rxjs/Rx';
import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import * as io from 'socket.io-client';

@Injectable()
export class ChatRoomService {
    private APIEndPoint = 'https://socketiochat-p1p3.c9users.io/'
    private headers = new Headers({'Content-Type': 'application/json'});
    private socketClient:SocketIOClient.Socket;

    private messages: Array<Message>;
    private messagesSource = new Subject<Message>();

    constructor(private http: Http) {
        this.messages = new Array<Message>();
        this.socketClient = io(this.APIEndPoint);
        this.socketClient.on('chat message', msg => this.messagesSource.next(msg));
    }

    postMessage(message: Message) {
        this.socketClient.emit('chat message', message);
    }

    getMessages():Observable<Message> {
        return this.messagesSource.asObservable()
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
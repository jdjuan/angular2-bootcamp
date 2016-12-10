import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http'

@Injectable()
export class ChatRoomService {
    private APIEndPoint = 'http://localhost:3000/'
    private headers = new Headers({'Content-Type': 'application/json'});

    private messages: Array<Message>;
    constructor(private http: Http) {
        this.messages = new Array<Message>();
    }

    postMessage(message: Message) {
     return this.http.post(this.APIEndPoint,message, {headers: this.headers}).toPromise();
    }

    getMessages():Promise<Array<Message>> {
        return this.http.get(this.APIEndPoint)
                    .toPromise()
                    .then(response => response.json() as Message[])
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
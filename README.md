# Angular2 HTTP, Promises and Observables

## Call a HTTP REST Service

1. Add APIEndPoint =  'https://socketiochat-p1p3.c9users.io/'
2. Inject http
3. GetMessages now will return a promise from http.Get(APIEndPoint+'/Messages')
4. PostMessages will use http.post 
5. Declare the headers 
  * private headers = new Headers({'Content-Type': 'application/json'});
6.  Modified window-chat component to use getMessages with promises


## Make it reactive !

1. Install socket.io client
  * npm install socket.io-client --save
2. Install socket.io client typings
  * npm install --save @types/socket.io-client
3. Import socket.io 
  * `import * as io from 'socket.io-client'`
4. Define a private socket
  * `private socketClient:SocketIOClient.Socket;`
5. Initialize the scoket pointing to the ApiEndPoint
  * `this.socketClient = io(this.APIEndPoint);`
6. Create a Subject of messages
  * `private messagesSource = new Subject<Message>();`
7. Modify the postMessage to emit the message 
  * `this.socketClient.emit('chat message', message);`
8. Modify the getMessages tu return a observable of messages:
  * `return this.messagesSource.asObservable();`
9. Subscribe to socket.io to emit when a new message arrives
  *  `this.socketClient.on('chat message', msg => this.messagesSource.next(msg));`
10. On ChatWindowComponent delete the timer and subscribe to the subject we just created.
  * `this.subscription = this.chatService.getMessages()
            .subscribe(message =>
                this.messages.push(message)
            );`


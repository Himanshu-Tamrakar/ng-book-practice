import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { refCount, publishReplay, scan, filter, map } from 'rxjs/operators';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { Message } from './message.model';

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}
const initialMessages: Message[] = [];

@Injectable()
export class MessagesService {

  newMessages: Subject<Message> = new Subject<Message>();

  messages: Subject<Message[]>;
  updates: Subject<any> = new Subject<any>();

  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() { 
    this.messages = <Subject<Message[]>>this.updates.pipe(
      scan((messages: Message[], operation: IMessagesOperation) => operation(messages), initialMessages),
      publishReplay(1),
      refCount()
    )


    this.create.pipe(
      map( function(message: Message): IMessagesOperation {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      })
    )
    .subscribe(this.updates);

    this.newMessages
        .subscribe(this.create);

    
        // similarly, `markThreadAsRead` takes a Thread and then puts an operation
    // on the `updates` stream to mark the Messages as read
    this.markThreadAsRead
        .pipe(
          map( (thread: Thread) => {
            return (messages: Message[]) => {
              return messages.map( (message: Message) => {
                // note that we're manipulating `message` directly here. Mutability
                // can be confusing and there are lots of reasons why you might want
                // to, say, copy the Message object or some other 'immutable' here
                if (message.thread.id === thread.id) {
                  message.isRead = true;
                }
                return message;
              });
            };
          })
        )
    .subscribe(this.updates);

    // var myMessage = new Message('');
    // this.updates.next((messages: Message[]): Message[] =>{
    //   return messages.concat(myMessage)
    // })

  }

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages
                .pipe(
                  filter((message: Message) => {
                    return (message.thread.id === thread.id) && (message.author.id !== user.id)
                  })
                );
               
               
  }
}

export const messagesServiceInjectables: Array<any> = [
  MessagesService
];

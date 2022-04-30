
import { Component } from '@angular/core';
import { Message } from './chat-rxjs/message/message.model';
import { MessagesService } from './chat-rxjs/message/messages.service';
import { Thread } from './chat-rxjs/thread/thread.model';
import { User } from './chat-rxjs/user/user.model';
import { Service1Service } from './dependency-injection/services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  constructor(private _service1: Service1Service, messageService: MessagesService ) {
    // console.log(window, _service1);

    var user1 = new User('Himanshu Tamrakar', 'https://google.com');
    var user2 = new User('Monty Tamrakar', 'https://google.com');

    var thread1 = new Thread('', 'Vahana Clound Discussion', 'https://googlei.com');

    var msg1 = new Message({
      id: Math.random() + '',
      sentAt: Date.now(),
      isRead: false,
      author: user1,
      text: 'I am an echo, I will repeat what you say',
      thread: thread1
    })

    var msg2 = new Message({
      id: Math.random() + '',
      sentAt: Date.now(),
      isRead: false,
      author: user1,
      text: 'I am an echo2, I will repeat what you say',
      thread: thread1
    })

    var msg3 = new Message({
      id: Math.random() + '',
      sentAt: Date.now(),
      isRead: false,
      author: user1,
      text: 'I am an echo3, I will repeat what you say',
      thread: thread1
    })

    messageService.newMessages.subscribe((message: Message) => console.log(message))
    
    messageService.addMessage(msg1);
    messageService.addMessage(msg2);
    setTimeout(() => {
      messageService.addMessage(msg3);

      setTimeout(() => {
        messageService.messagesForThreadUser(thread1, user2).subscribe((message: Message) => console.log(message));
      }, 1000);


    }, 2000);

    

  }
}

function device() {
  return 'isAMobileDevice' ? './app.component.html' : './app.mobile.component.html';
}



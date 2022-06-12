import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'async-pipe-message',
  template: `
        <h2>Async Hero Message and AsyncPipe</h2>
        <p>Message: {{ message$ | async }}</p>
        <button type="button" (click)="resend()">Resend</button>
  `
})
export class AsyncMessageComponent implements OnInit {
  message$: Observable<string>;
  private messages: string[] = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ]
  constructor() { 
    this.message$ = this.startMessaging();
  }

  ngOnInit(): void {
  }

  resend() {
    this.message$ = this.startMessaging();
  }


  startMessaging(): Observable<string> {
    return interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    )
  }




}

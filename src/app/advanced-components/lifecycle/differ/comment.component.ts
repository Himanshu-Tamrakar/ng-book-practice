import { Component, DoCheck, EventEmitter, Input, KeyValueDiffers, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit, DoCheck {
  
  @Input() comment: any;
  @Output() onRemove: EventEmitter<any>;
  differ: any;

  constructor(differ: KeyValueDiffers) { 
    this.onRemove = new EventEmitter();
    this.differ = differ.find([]).create();
  }
  ngDoCheck(): void {
    const changes = this.differ.diff(this.comment);

    if (changes) {
      changes.forEachAddedItem((r: any) => {
        this.logChange('added', r);
      });

      changes.forEachRemovedItem((r:any) => {
        this.logChange('removed', r);
      });

      changes.forEachChangedItem((r: any) => {
        this.logChange('changed', r);
      })
    }
  }

  logChange(arg0: string, r: any) {
    if (arg0 == 'added') {
      console.log(r.key, arg0, 'from', r.previousValue, 'to', r.currentValue);
    } else if (arg0 == 'removed') {
      console.log(arg0, r.key, 'with', r.currentValue);
    } else if (arg0 == 'changed') {
      console.log( arg0, r.key, '(was ' + r.previousValue + ')');
    }
  }

  remove(): void {
    this.onRemove.emit(this.comment);
  }

  clear(): void {
    delete this.comment.comment;
  }

  like(): void {
    this.comment.likes++;
  }

  ngOnInit(): void {
  }

}

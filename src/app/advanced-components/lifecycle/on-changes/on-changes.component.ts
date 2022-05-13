import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html'
})
export class OnChangesComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() comment: string;
  
  constructor() { 
    console.log('Constructor');
    this.name = '';
    this.comment = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

}

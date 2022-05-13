import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  template: `
            
  `
})
export class OnInitComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('On init');
  }

  ngOnDestroy(): void {
    console.log('On destroy');
  }

}

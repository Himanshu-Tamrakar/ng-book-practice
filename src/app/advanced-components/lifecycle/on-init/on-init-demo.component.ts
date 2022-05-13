import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init-demo',
  templateUrl: './on-init-demo.component.html'
})
export class OnInitDemoComponent implements OnInit {

  display: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.display = !this.display;
  }

}

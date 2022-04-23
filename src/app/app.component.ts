
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  constructor() {
    console.log(window);
  }
}

function device() {
  return 'isAMobileDevice' ? './app.component.html' : './app.mobile.component.html';
}



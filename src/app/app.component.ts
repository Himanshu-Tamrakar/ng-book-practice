
import { Component } from '@angular/core';
import { Service1Service } from './dependency-injection/services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  constructor(private _service1: Service1Service) {
    console.log(window, _service1);
  }
}

function device() {
  return 'isAMobileDevice' ? './app.component.html' : './app.mobile.component.html';
}



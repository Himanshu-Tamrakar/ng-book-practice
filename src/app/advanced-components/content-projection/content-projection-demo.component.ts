import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection-demo',
  template: `
  <div app-message header="My header1">
    This is the content of the message
    <h1>HEE</h1>
  </div>

  `
})
export class ContentProjectionDemoComponent {
}

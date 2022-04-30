import { Directive } from '@angular/core';

@Directive({
  selector: '[popup]'
})
export class PopupDirective {

  constructor() { 
    console.log('Directive Bound');

  }

}

import { Component, ContentChild, Directive, OnInit, TemplateRef } from '@angular/core';
import { ZippyContentDirective } from './example-zippy.component';

@Component({
  selector: 'conditional-content-projection',
  template: `
    
  `
})

export class ConditionalContentProjectionComponent implements OnInit  {

    @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
    
    constructor() {

    }
    
    ngOnInit(): void {
    }
    
}
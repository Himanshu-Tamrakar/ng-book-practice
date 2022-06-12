import { Component, Directive, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-example-zippy',
  template: `
     
  `
})
export class ExampleZippyComponent implements OnInit {

  constructor() { }
 // <div *ngIf="expanded" [id]="contentId">
      //   <ng-content ngTemplateOutlet="content.templateRef"></ng-content>
      // </div>
  ngOnInit(): void {
  }

}

@Directive({
  selector: '[appExampleZippyContent]'
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBookIfDirective } from './ng-book-if/ng-book-if.directive';
import { NgBookIfDemoComponent } from './ng-book-if/ng-book-if-demo.component';
import { NgBookForDirective } from './ng-book-for/ng-book-for.directive';
import { NgBookForDemoComponent } from './ng-book-for/ng-book-for-demo.component';



@NgModule({
  declarations: [
    NgBookIfDirective,
    NgBookIfDemoComponent,
    NgBookForDirective,
    NgBookForDemoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [NgBookIfDemoComponent, NgBookForDemoComponent]
})
export class TemplatesModule { }

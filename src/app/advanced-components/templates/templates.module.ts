import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBookIfDirective } from './ng-book-if/ng-book-if.directive';
import { NgBookIfDemoComponent } from './ng-book-if/ng-book-if-demo.component';



@NgModule({
  declarations: [
    NgBookIfDirective,
    NgBookIfDemoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [NgBookIfDemoComponent]
})
export class TemplatesModule { }

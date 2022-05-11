import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTabComponent } from './content-tabs-demo/content-tab.component';
import { ContentTabsComponent } from './content-tabs-demo/content-tabs.component';
import { ContentTabsetComponent } from './content-tabs-demo/content-tabset.component';



@NgModule({
  declarations: [
    ContentTabComponent,
    ContentTabsComponent,
    ContentTabsetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContentTabsComponent]
})
export class TabModule { }

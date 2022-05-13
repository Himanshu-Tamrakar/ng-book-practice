import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInitComponent } from './on-init/on-init.component';
import { OnInitDemoComponent } from './on-init/on-init-demo.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { OnChangesDemoComponent } from './on-changes/on-changes-demo.component';
import { CommentComponent } from './differ/comment.component';
import { CommentsListComponent } from './differ/comments-list.component';
import { DifferDemoComponent } from './differ/differ-demo.component';
import { AllHooksComponent } from './all-hooks/all-hooks.component';
import { AllHooksDemoComponent } from './all-hooks/all-hooks-demo.component';



@NgModule({
  declarations: [
    OnInitComponent,
    OnInitDemoComponent,
    OnChangesComponent,
    OnChangesDemoComponent,
    CommentComponent,
    CommentsListComponent,
    DifferDemoComponent,
    AllHooksComponent,
    AllHooksDemoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [OnInitDemoComponent, OnChangesDemoComponent, DifferDemoComponent, AllHooksDemoComponent]
})
export class LifecycleModule { }

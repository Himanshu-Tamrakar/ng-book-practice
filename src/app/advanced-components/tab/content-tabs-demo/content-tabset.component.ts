import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { ContentTabComponent } from './content-tab.component';

@Component({
  selector: 'tabset',
  templateUrl: './content-tabset.component.html',
  styles: []
})
export class ContentTabsetComponent implements OnInit, AfterContentInit {
  @ContentChildren(ContentTabComponent) tabs!: QueryList<ContentTabComponent>;

  ngAfterContentInit(): void {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: ContentTabComponent): void {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

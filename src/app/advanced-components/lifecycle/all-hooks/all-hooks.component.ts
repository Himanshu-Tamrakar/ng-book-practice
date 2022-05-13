import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-all-hooks',
  templateUrl: './all-hooks.component.html',
})
export class AllHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }
  
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

}

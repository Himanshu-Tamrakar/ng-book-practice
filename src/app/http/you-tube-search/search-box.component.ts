import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, filter, map, switchAll } from 'rxjs/operators';
import { SearchResult } from './search-result-modal';
import { YouTubeSearchService } from './you-tube-search.service';

@Component({
  selector: 'app-search-box',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  
  constructor(private youtube: YouTubeSearchService, private el: ElementRef) {
  }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((eve: any) => eve['target']['value']),
        debounceTime(1000),
        filter((text: any) => text.length > 1),
                 
      )
      .subscribe(count => {
        this.loading.emit(true);
        this.youtube.search(count+"").subscribe(
          (data: SearchResult[]) => {
            this.loading.emit(false);
            this.results.emit(data);
          },
          (err: any) => { // on error
            console.log(err);
            this.loading.emit(false);
          },
          () => { // on completion
            this.loading.emit(false);
          }
        )
      })
  }

}




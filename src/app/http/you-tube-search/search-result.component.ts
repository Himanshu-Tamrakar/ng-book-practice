import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from './search-result-modal';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit {
  @Input() result: SearchResult;
  constructor() { 
    this.result = new SearchResult({})
  }

  ngOnInit(): void {
  }

}



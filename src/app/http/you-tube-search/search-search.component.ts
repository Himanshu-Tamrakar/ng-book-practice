import { Component, OnInit } from '@angular/core';
import { SearchResult } from './search-result-modal';

@Component({
  selector: 'app-search-search',
  templateUrl: './search-search.component.html',
})
export class SearchSearchComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor() { 
    this.results = [];
    this.loading = false;
  }
  ngOnInit() { }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }

}

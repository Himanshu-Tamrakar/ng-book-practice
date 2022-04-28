import { HttpClient } from '@angular/common/http';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Inject, Injectable } from '@angular/core';
import { OperatorFunction } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import {map, take } from 'rxjs/operators'

import { SearchResult } from './search-result-modal';

export const YOUTUBE_API_KEY =
  'AIzaSyCPsqIY4kyu09IUCd8r9f8kvyAF2lNgFa4';
export const YOUTUBE_API_URL =
  'https://jsonplaceholder.typicode.com/photos';

  interface result {
    data: SearchResult[]
  }

@Injectable()
export class YouTubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_URL) private apiUrl: string, 
    @Inject(YOUTUBE_API_KEY) private apiKey: string) { 
  }

  search(count: string): Observable<SearchResult[]> {

    const queryUrl = `${this.apiUrl}`;

    return this.http.get(queryUrl)
    .pipe(
       map(data => Array.prototype.slice.call(data, 1, +count).map(item => new SearchResult(item)))
     )

  }

}

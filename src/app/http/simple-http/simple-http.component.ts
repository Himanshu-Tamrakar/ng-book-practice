import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { YouTubeSearchService } from '../you-tube-search/you-tube-search.service';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html'
})
export class SimpleHttpComponent implements OnInit {
  loading = false;
  data: object;
  constructor(private http: HttpClient, private api: YouTubeSearchService) { 
    this.data = {};
  }

  ngOnInit(): void {
  }

  makeRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

}

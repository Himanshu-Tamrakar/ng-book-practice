import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string = '';
  results: any;

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) { 
                this.results = {};
                this.route.queryParams.subscribe(param => this.query = param['query'] || "");

  }

  refreshAccessToken() {
    this.spotify.getAccessToken();
  }

  ngOnInit(): void {

    // this.http
    //     .request("GET", 'https://application-management-dev.vahanacloud.com/backend/earth/asset-manager/api/v1/asset/export', {})
    //     .subscribe(res => {
    //       debugger
    //       console.log(res);
    //     })
        


  }

  search() {
    if (!this.query) {
      return;
    }
    this.spotify
        .searchTrack(this.query)
        .subscribe((data: any) => {
          this.resnderResults(data);
        })
  }

  resnderResults(res: any) {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }


  submit(query: string): void {
    this.router.navigate(['search'], { queryParams: { query: query } })
      .then(_ => this.search() );
  }

}

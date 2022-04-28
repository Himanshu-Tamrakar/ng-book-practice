import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class SpotifyService {
  accessTokem: string = ''
  static BASE_URL = "https://api.spotify.com/v1";

  constructor(private http: HttpClient) { 
  }

  getAccessToken(): void {
    var client_id = '0d3dbc657bfd44f5ab862ac2cc29c6bf';
    var client_secret = 'aae20cb8992d4309965dc117f8bbb7b5';

  
    const options = {
      headers: new HttpHeaders({
          'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret)),
          'Content-Type': 'application/x-www-form-urlencoded',
      })
    };

    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');

    this.http.post('https://accounts.spotify.com/api/token', 
                    body.toString(),
                    options
                  ).subscribe((data:any) => this.accessTokem = data['access_token'])
  }

  query(URL: string, params?: Array<string>): Observable<any> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }
    const apiKey = environment.spotifyApiKey;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessTokem}`
    });
    const options = {
      headers: headers
    };

    return this.http.request("GET", queryURL, options);
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any> {
    return this.search(query, "track");
  }

  getArtist(id: string): Observable<any> {
    return this.query(`/artists/${id}`);
  }


  getAlbum(id: string): Observable<any> {
    return this.query(`/albums/${id}`);
  }


  getTrack(id: string): Observable<any> {
    return this.query(`/tracks/${id}`);
  }
}

export const SPOTIFY_PROVIDERS: Array<any> = [
  { provide: SpotifyService, useClass: SpotifyService }
];

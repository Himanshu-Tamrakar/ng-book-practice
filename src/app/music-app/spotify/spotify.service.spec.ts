import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { 
  HttpTestingController, 
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import {
  HttpClient,
  HttpBackend,
  HttpRequest,
  HttpResponse,
  HttpHandler
} from "@angular/common/http";

import { SpotifyService } from './spotify.service';



describe('SpotifyService', () => {
  let service: SpotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpotifyService]
    });
    service = TestBed.inject(SpotifyService);
  });

  function expectURL(backend: HttpTestingController, url: string) {
    const testRequest = backend.expectOne(url);
    testRequest.flush({name: 'felipe'});
    return testRequest;
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GetTrack', () => {
    it("retrieves using the track ID", inject(
      [SpotifyService, HttpTestingController],
      fakeAsync((svc: SpotifyService, backend: HttpTestingController) => {
        let res: any;
        svc.getTrack("TRACK_ID").subscribe(_res => {
          console.log("_res: ", _res);
          res = _res;
        });
        expectURL(backend, "https://api.spotify.com/v1/tracks/TRACK_ID");
        tick();
        expect(res.name).toBe("felipe");
  
        backend.verify();
      })
    ));
  })

  describe('Get Album', () => {
    it("retrives using album id", inject(
      [SpotifyService, HttpTestingController],
      fakeAsync((spotifyService: SpotifyService, mockbackend:HttpTestingController) => {
        var res: any;
        spotifyService.getAlbum('ALBUM_ID').subscribe(_res => {
          res = _res;
        })
        expectURL(mockbackend, 'https://api.spotify.com/v1/albums/ALBUM_ID');
        tick();
        expect(res.name).toBe('felipe');
        mockbackend.verify()

      })
    ))

  })

  describe('Get Artits', () => {
    it("retrives using artist", inject(
      [SpotifyService, HttpTestingController],
      fakeAsync((spotifyService: SpotifyService, mockbackend:HttpTestingController) => {
        var res: any;
        spotifyService.getArtist('ARTIST_ID').subscribe(_res => {
          res = _res;
        })
        expectURL(mockbackend, 'https://api.spotify.com/v1/artists/ARTIST_ID');
        tick();
        expect(res.name).toBe('felipe');
        mockbackend.verify()

      })
    ))

  })

  describe('searchTrack', () => {
    it("retrives using search track", inject(
      [SpotifyService, HttpTestingController],
      fakeAsync((spotifyService: SpotifyService, mockbackend:HttpTestingController) => {
        var res: any;
        spotifyService.searchTrack('TERM').subscribe(_res => {
          res = _res;
        })
        expectURL(mockbackend, 'https://api.spotify.com/v1/search?q=TERM&type=track');
        tick();
        expect(res.name).toBe('felipe');
        mockbackend.verify()

      })
    ))

  })

  

});



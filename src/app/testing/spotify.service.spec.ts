import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject, TestBed, waitForAsync } from "@angular/core/testing";
import { SpotifyService } from "../music-app/spotify/spotify.service";

describe('Testing HTTP call #Spotify Service', () => {
    let spotifyService: SpotifyService;
    let httpTestingController; HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SpotifyService]
        });

        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('#search should call spotify service', 
        waitForAsync(
            inject(
                [SpotifyService, HttpTestingController], (spotify: SpotifyService, mocbackend: any) => {
                    const query = 'indie';
                    const type = 'album';
                    const testData = {};

                    spotify.search(query, type).subscribe(data => {
                        expect(data).toBe(testData);
                    });

                    const req = mocbackend.expectOne(`https://api.spotify.com/v1/search?q=${query}&type=${type}`);

                    expect(req.request.method).toBe('GET');
                    expect(req.request.headers.has('Authorization')).toBeTruthy();

                    req.flush(testData);

                    mocbackend.verify();


            })
        )
    )
});
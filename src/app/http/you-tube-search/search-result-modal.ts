export class SearchResult {
    id: number;
    title: string;
    thumbnailUrl: string;
    url: string;
    albumId: number;


    constructor(obj: any) {
        this.albumId      = obj && obj.albumId || null;
        this.id           = obj && obj.id || null;
        this.title        = obj && obj.title || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.url          = obj && obj.url || null;
    }
    // AIzaSyCPsqIY4kyu09IUCd8r9f8kvyAF2lNgFa4
}

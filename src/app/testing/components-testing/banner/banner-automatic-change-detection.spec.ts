import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { BannerComponent } from "./banner.component"

describe('Banner automatic change detection', () => {
    let component: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let h1:HTMLHeadingElement;

    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent],
            providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
        }).compileComponents();

        fixture = TestBed.createComponent(BannerComponent);

        component = fixture.componentInstance;
        const h1Debug = fixture.debugElement.query(By.css('h1'));
        h1 = h1Debug.nativeElement;
        
    });

    it('Banner initeated and should display orgional title', () => {
        expect(component).toBeDefined();
        expect(h1.innerText).toBe(component.title);
    });

    it('should display changed title', () => {
        component.title = 'changed title';
        fixture.detectChanges();
        expect(h1.innerText).toEqual(component.title);
    });



})
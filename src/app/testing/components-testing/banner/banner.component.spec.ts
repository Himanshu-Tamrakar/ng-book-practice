import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { BannerComponent } from "./banner.component"

describe('Banner Component Testing', () => {
    let component: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let h1:HTMLHeadingElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;

        const h1Debug = fixture.debugElement.query(By.css('h1'));

        h1 = h1Debug.nativeElement as HTMLHeadingElement;
    });


    it('Banner component should be initialized', () => {
        expect(component).toBeDefined();
    });

    it('should display orgional title', () => {

        expect(h1.innerText).toEqual('');

        fixture.detectChanges();

        expect(h1.innerText).toEqual(component.title);
    });

    it('should display changed title', () => {
        component.title = 'changed title';
        fixture.detectChanges();
        expect(h1.innerText).toEqual(component.title);
    })


})
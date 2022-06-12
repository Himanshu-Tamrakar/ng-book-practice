import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { UserService } from "./user.service"
import { WelcomeComponent } from "./welcome.component"

class MockUserService {
    isLoggedIn = true;
    user = { name: 'Test User'};
}

describe('Welcome Component', () => {

    describe('Without Mocking Service', () => {
        let fixture: ComponentFixture<WelcomeComponent>;
        let component: WelcomeComponent;
        let userService: UserService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations:[WelcomeComponent],
                providers: [{provide: UserService, useClass: UserService}]
            }).compileComponents();

            fixture = TestBed.createComponent(WelcomeComponent);
            component = fixture.componentInstance;
            userService = TestBed.inject(UserService);

        });

        it('Welcome message should contain Sam Spade ', () => {
            component.ngOnInit();
            fixture.detectChanges();

            expect(component.welcome).toMatch(/Sam Spade/gi);

        })
    })

    describe('With Mocking Service', () => {
        let fixture: ComponentFixture<WelcomeComponent>;
        let component: WelcomeComponent;
        let userService: UserService;
        
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations:[WelcomeComponent],
                providers: [{provide: UserService, useClass: MockUserService}]
            }).compileComponents();
            
            fixture = TestBed.createComponent(WelcomeComponent);
            component = fixture.componentInstance;
            userService = TestBed.inject(UserService);
        
        });
    
        it('Welcome message should be contains Test User', () => {
            component.ngOnInit();
            fixture.detectChanges();
            expect(component.welcome).toMatch(/Test User/gi);
        });

        it('Welcome message after isLogged in to false should be', () => {
            userService.isLoggedIn = false;
            component.ngOnInit();
            expect(component.welcome).toBe('Please log in.')
        });

        it('Welcome message', () => {
            const debugElem = fixture.debugElement.query(By.css('h3'));
            const h3 = debugElem.nativeElement as HTMLHeadingElement;
            expect(h3.innerText).toMatch(''); // as change detection did not run

            fixture.detectChanges();
            expect(h3.innerText).toMatch(/Welcom/gi);
        })
    })

    
})
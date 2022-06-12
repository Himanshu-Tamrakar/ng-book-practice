import { HtmlAstPath } from "@angular/compiler";
import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ExpectedConditions } from "protractor";
import { HighlightDirective } from "./highlight.directive";

@Component({
    template: `
        <h2 highlight="yellow">This should be yellow</h2>
        <h2 highlight>This should be Default(grey)</h2>
        <h2>No Highlight</h2>
        <input #box [highlight]="box.value" value="cyan"/>
    `
})
export class TestComponent {}

describe('Highlight Directive', () => {
    let fixture: ComponentFixture<TestComponent>;
    let deb: DebugElement[];

    let bareH2: HTMLHeadingElement;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [HighlightDirective, TestComponent]
        }).createComponent(TestComponent);
        
        deb = fixture.debugElement.queryAll(By.directive(HighlightDirective));

        bareH2 = fixture.debugElement.query(By.css('h2:not([highlight])')).nativeElement;
        fixture.detectChanges();
        
    });

    it('#First H2 should be yello background', () => {
        const debugElem = deb[0];
        expect(debugElem.styles.backgroundColor).toBe('yellow');
    });

    it('#Second H2 should be Default background(grey)', () => {
        const debugElem = deb[1];
        expect(debugElem.styles.backgroundColor).toBe('rgb(211, 211, 211)');
    });

    it('#Thirld H2 should be Default cyan', () => {
        const debugElem = deb[2];
        expect(debugElem.styles.backgroundColor).toBe('cyan');
    });

    
    it('should bind <input> background to value color', () => {
      // easier to work with nativeElement
          const input = deb[2].nativeElement as HTMLInputElement;
          expect(input.style.backgroundColor)
            .withContext('initial backgroundColor')
            .toBe('cyan');

          input.value = 'green';

          // Dispatch a DOM event so that Angular responds to the input value change.
          input.dispatchEvent(new Event('input'));
          fixture.detectChanges();

          expect(input.style.backgroundColor)
            .withContext('changed backgroundColor')
            .toBe('green');
    });

    it('`HighlightDirective` in 1st <h2>', () => {
        const highlight = deb[0].injector.get(HighlightDirective) as HighlightDirective;
        expect(highlight).toBeDefined();
    })

    it('`Bareh2 does not have hightlight attribute`', () => {
        expect(bareH2.style.getPropertyPriority('highlight')).toBeFalsy();
        expect(bareH2.style.backgroundColor).toBe('');
    })
})
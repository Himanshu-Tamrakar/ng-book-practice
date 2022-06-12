
import { Component, Injectable, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { of } from "rxjs";
import { delay } from 'rxjs/operators';

@Injectable()
export class ValueService {
    value = 'real value';

    getValue() {return this.value;}
    setValue(value: string) { this.value = value; }

    getObservableValue() { return of('observable value'); }
    getPromiseValue() { return Promise.resolve('promise value'); }

    getObservableDelayValue() {
      return of('observable delay value').pipe(delay(10));
    }

}

@Injectable()
export class MasterService {
    constructor(private valueService: ValueService ){}
    
    getValue() { return this.valueService.getValue(); }
}

// Class does not have any dependency
@Component({
    selector: 'lightswitch-comp',
    template: `
      <button type="button" (click)="clicked()">Click me!</button>
      <span>{{message}}</span>`
  })
  export class LightswitchComponent {
    isOn = false;
    clicked() { this.isOn = !this.isOn; }
    get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  }

export const demoProviders = [ValueService];
export const demoDeclaration = [LightswitchComponent];
/**
 * Demo Module
 */
@NgModule({
    imports:[CommonModule],
    declarations: demoDeclaration,
    providers: demoProviders
})
export class DemoModule {}
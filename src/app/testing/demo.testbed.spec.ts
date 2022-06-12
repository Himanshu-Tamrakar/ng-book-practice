import { fakeAsync, inject, TestBed, tick, waitForAsync } from "@angular/core/testing"
import { of } from "rxjs";
import { MasterService, ValueService } from "./demo"

export class NotProvided extends ValueService { /* example below */ }
describe('demo (with TestBed):', () => {
    
    describe('Value Service', () => {
        let valueService: ValueService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [ValueService]
            })
            
            valueService = TestBed.inject(ValueService);
        })
        
        it('should use ValueService', () => {
            expect(valueService.getValue()).toBe('real value');
        });

        it('can inject a default value when service is not provided', () => {
            expect(TestBed.inject(NotProvided, null)).toBe(null);
        })

        /**Threeimal1@ same */
        //waiForAsych automatically mark funciton as done once every asynchronous function finished
        it('test should wait for ValueService.getPromiseValue', waitForAsync(() => {
            valueService.getPromiseValue().then(
                value => expect(value).toBe('promise value')
            );
        }));

        it('test should wait for ValueService.getPromiseValue', fakeAsync(() => {
            valueService.getPromiseValue().then(
                value => expect(value).toBe('promise value')
            );
        }));

        //done manually mark funciton as done once every asynchronous function finished
        it('test should wait for ValueService.getPromiseValue', (done: DoneFn) => {
            valueService.getPromiseValue().then(value => {
                expect(value).toBe('promise value'); 
                done();
            });
        });
        /**Three same: up */

        it('test should wait for ValueService.getObservableValue', waitForAsync(() => {
            valueService.getObservableValue().subscribe(
              value => expect(value).toBe('observable value')
            );
        }));

        it('test should wait for ValueService.getObservableValue with done', (done: DoneFn) => {
            valueService.getObservableValue().subscribe(value => {
                  expect(value).toBe('observable value')
                  done();
            });
        });

        it('test should wait for ValueService.getObservableDelayValue', waitForAsync(() => {
            valueService.getObservableDelayValue().subscribe(data => {
                expect(data).toBe('observable delay value');
            });
        }));

        it('should allow the use of fakeAsync', fakeAsync(() => {
            let objVal: string = '';
            let promiseVal: string = '';
            let objDelayedVal:string = '';
            valueService.getObservableValue().subscribe(data => objVal = data);
            valueService.getPromiseValue().then(data => promiseVal = data);
            
            tick();

            expect(objVal).toBe('observable value');
            expect(promiseVal).toBe('promise value');
        }))

        // Its a bug
        // it('should allow the use of fakeAsync', waitForAsync(() => {
        //     let objDelayedVal:string = '';
        //     valueService.getObservableDelayValue().subscribe(data => objDelayedVal = data);
        //     tick();
        //     expect(objDelayedVal).toBe('observable delay value');
        // }))

    })

    describe('MasterService with TestBed', () => {
        let masterService: MasterService;
        let valueServiceSpy: any;

        const spy = jasmine.createSpyObj('ValueService', ['getValue', 'getObservableValue']);
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers:[
                    { provide: ValueService, useValue: spy },
                    MasterService
                ]
            });

            masterService = TestBed.inject(MasterService);
            valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
        });

        it('#getValue should return stubbed value from a spy', () => {
            const stubValue = 'stub value';
            valueServiceSpy.getValue.and.returnValue(stubValue);

            expect(masterService.getValue())
                .withContext('service returned stub value')    
                .toBe(stubValue);

            expect(valueServiceSpy.getValue.calls.count())
                .withContext('spy method was called once')
                .toBe(1);    

            expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
                .toBe(stubValue)
        })

    })

    describe('use inject within `it`', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [ValueService]
            });
        });

        it('use inject within `it`', 
            inject([ValueService], (valueService: ValueService) => {
                expect(valueService.getValue()).toBe('real value');
        }));

        it('use inject within `it` and test #getObservableValue',
            waitForAsync(inject([ValueService], (valueService: ValueService) => {
                valueService.getObservableValue().subscribe(data => {
                    expect(data).toBe('observable value');
                })
            })
        ))
    })
    
})
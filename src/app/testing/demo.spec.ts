import { LightswitchComponent, MasterService, ValueService } from "./demo";

/**
 * Fakes
 */

///////// Fakes /////////
export class FakeValueService extends ValueService {
     value = 'faked service value';
}

describe('demo (no test bed)', ()=> {
    // Straight Jasmine testing without Angular's testing support
    describe('ValueService', () => {

        let service: ValueService;

        beforeEach(() => {
            service = new ValueService()
        });

        it('#getValue should return real value', () => {
            expect(service.getValue()).toBe('real value');
        });

        it('#setValue should set value', () => {
            const newValue = 'new real value';
            service.setValue(newValue);
            expect(service.getValue()).toBe(newValue);
        });

        it('#getObservableValue should return value from observable', (done: DoneFn) => {
            service.getObservableValue().subscribe(data => {
                expect(data).toBe('observable value');
                done();
            })
        })

        it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
            service.getPromiseValue().then(value => {
              expect(value).toBe('promise value');
              done();
            });
        });

        it('#getObservableDelayValue should return deplayed value', (done: DoneFn) => {
            service.getObservableDelayValue().subscribe(data => {
                expect(data).toBe('observable delay value');
                done()
            })
        })
    })

    // MasterService requires injection of a ValueService
    describe('Master without Anguler testing support', () => {
        let masterService: MasterService;

        it('#getValue should return real value from the real service', () => {
            masterService = new MasterService(new ValueService());
            expect(masterService.getValue()).toBe('real value');
        });

        it('#getValue should return faked value from a fakeService', () => {
            // Faking Class
            masterService = new MasterService(new FakeValueService());
            expect(masterService.getValue()).toBe('faked service value');
        });

        it('#getValue should return faked value from a fake object', () => {
            // stub
            const fakeObj = {
                getValue: () => 'fake value'
            }

            masterService = new MasterService(fakeObj as ValueService);
            expect(masterService.getValue()).toBe('fake value');
        });

        it('#getValue should return stubbed value from a spy', () =>{
            // spy
            const valueServiceSpy = jasmine.createSpyObj('valueService', ['getValue']);

            const stubValue = 'stub value';
            valueServiceSpy.getValue.and.returnValue(stubValue);

            masterService = new MasterService(valueServiceSpy);

            expect(masterService.getValue()).toBe(stubValue);

        })
    })

    describe('MasterService (no beforeEach)', () => {

        it('#getValue should return stubbed value from a spy', () => {
            const {masterService, valueServiceSpy, stubValue} = setup();

            expect(masterService.getValue())
                .withContext('service returned stub value')
                .toBe(stubValue);

            expect(valueServiceSpy.getValue.calls.count())
                .withContext('spy method was called once')
                .toBe(1);

            expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
                .toBe(stubValue);

        })

        function setup() {
            const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
            const stubValue = 'sub value';
            valueServiceSpy.getValue.and.returnValue(stubValue);
            const masterService = new MasterService(valueServiceSpy);

            return {masterService, valueServiceSpy, stubValue,}
        }
    })



    // Component with No Dependency
    describe('#LightComponent:: Has no dependency', () => {
        let comp: LightswitchComponent;
        beforeEach(() => {
            comp = new LightswitchComponent();
        });
        
        it('#clicked should toggle `isOn`', () => {
            expect(comp.isOn)
                .withContext('Initially isOn to be false')    
                .toBeFalse();

            comp.clicked();
            expect(comp.isOn)
                .withContext('After clicked isOn should be true')
                .toBeTrue();

            comp.clicked();
            expect(comp.isOn)
                .withContext('After second clicked isOn should be false')
        });

        it('#clicked should set message to `is On', () => {
            comp.clicked();

            expect(comp.message)
                .withContext('After Clicked message text should contain is On')
                .toMatch(/is On/ig);
        })

    })

    
})
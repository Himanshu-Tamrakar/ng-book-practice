import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSkuFormBuilderWithCustomValidatorComponent } from './demo-sku-form-builder-with-custom-validator.component';

describe('DemoSkuFormBuilderWithCustomValidatorComponent', () => {
  let component: DemoSkuFormBuilderWithCustomValidatorComponent;
  let fixture: ComponentFixture<DemoSkuFormBuilderWithCustomValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSkuFormBuilderWithCustomValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSkuFormBuilderWithCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

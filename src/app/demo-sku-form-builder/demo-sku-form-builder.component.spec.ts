import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSkuFormBuilderComponent } from './demo-sku-form-builder.component';

describe('DemoSkuFormBuilderComponent', () => {
  let component: DemoSkuFormBuilderComponent;
  let fixture: ComponentFixture<DemoSkuFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSkuFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSkuFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

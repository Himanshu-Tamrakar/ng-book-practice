import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function skuValidator(control: FormControl): { [s: string]: boolean } | undefined | null {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
  return null;
}

@Component({
  selector: 'app-demo-sku-form-builder-with-custom-validator',
  templateUrl: './demo-sku-form-builder-with-custom-validator.component.html',
  styleUrls: ['./demo-sku-form-builder-with-custom-validator.component.scss']
})
export class DemoSkuFormBuilderWithCustomValidatorComponent implements OnInit {

  myForm: FormGroup;
  // sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose( [Validators.required, Validators.pattern(/^123/)])]
    });
  }

  observeSku(): void {
    this.myForm.get('sku')?.valueChanges.subscribe((value: string) => {
      console.log('SKU changes', value);
    })

    this.myForm.valueChanges.subscribe((val: Object) => {
      console.log('FORM CHANCGES', val);
    })
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit(): void {
    this.observeSku();
  }

}

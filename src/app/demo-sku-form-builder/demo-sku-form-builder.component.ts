import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-sku-form-builder',
  templateUrl: './demo-sku-form-builder.component.html',
  styleUrls: ['./demo-sku-form-builder.component.scss']
})
export class DemoSkuFormBuilderComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    });

    console.log(typeof this.myForm.controls['sku']);
  }

  onSubmit(value: object): boolean {
    console.log(value);
    return false;
  }

  ngOnInit(): void {
  }

}

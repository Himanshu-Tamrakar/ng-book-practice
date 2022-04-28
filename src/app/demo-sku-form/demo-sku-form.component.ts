import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-sku-form',
  templateUrl: './demo-sku-form.component.html',
  styleUrls: ['./demo-sku-form.component.scss']
})
export class DemoSkuFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  formSubmit(value: string): boolean {
    console.log(value);
    return false;
  }
}

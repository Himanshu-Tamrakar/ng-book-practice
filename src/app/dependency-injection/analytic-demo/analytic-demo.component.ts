import { Component, OnInit } from '@angular/core';
import { AnalyticService } from '../services/analytic.service';

@Component({
  selector: 'app-analytic-demo',
  templateUrl: './analytic-demo.component.html',
  styleUrls: ['./analytic-demo.component.scss']
})
export class AnalyticDemoComponent implements OnInit {

  constructor(private analytics: AnalyticService) {
    this.analytics.record({
      eventName: 'componentCreated',
      scope: 'AnalyticsDemoComponent'
    });
  }

  ngOnInit() {
    this.analytics.record({
      eventName: 'componentOnInit',
      scope: 'AnalyticsDemoComponent'
    });
  }

  buyButtonPressed(product: string) {
    this.analytics.record({
      eventName: 'buyButtonPressed',
      scope: product
    });
  }

}

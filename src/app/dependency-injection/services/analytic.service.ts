import { Inject, Injectable } from '@angular/core';
import { AnalyticsImplementation, Metric,  } from '../analytic-demo/analytic-demo';

@Injectable()
export class AnalyticService {

  constructor(@Inject('') private implementation: AnalyticsImplementation) {
  }

  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }
}

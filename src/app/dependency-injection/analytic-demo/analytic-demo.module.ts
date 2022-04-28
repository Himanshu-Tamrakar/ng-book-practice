import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticDemoComponent } from './analytic-demo.component';
import { AnalyticService } from '../services/analytic.service';
import { AnalyticsImplementation, Metric } from './analytic-demo';



@NgModule({
  declarations: [AnalyticDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [AnalyticDemoComponent],
  providers: [
    {
      // `AnalyticsService` is the _token_ we use to inject
      // note, the token is the class, but it's just used as an identifier!
      provide: AnalyticService,
      
      // useFactory is a function - whatever is returned from this function
      // will be injected
      useFactory() {

        // create an implementation that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
          }
        };

        // create our new `AnalyticsService` with the implementation
        return new AnalyticService(loggingImplementation);
      }
    }
  ]
})
export class AnalyticDemoModule { }

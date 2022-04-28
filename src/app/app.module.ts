import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { DemoSkuFormComponent } from './demo-sku-form/demo-sku-form.component';
import { DemoSkuFormBuilderComponent } from './demo-sku-form-builder/demo-sku-form-builder.component';
import { DemoSkuFormBuilderWithCustomValidatorComponent } from './demo-sku-form-builder-with-custom-validator/demo-sku-form-builder-with-custom-validator.component';
import { ManualInjectorComponent } from './dependency-injection/manual-injector/manual-injector.component';
import { Service1Service } from './dependency-injection/services/service1.service';
import { Service2Service } from './dependency-injection/services/service2.service';
import { AnalyticDemoModule } from './dependency-injection/analytic-demo/analytic-demo.module';
import { SimpleHttpComponent } from './http/simple-http/simple-http.component';
import { HttpClientModule } from '@angular/common/http';
import { youTubeSearchInjectables } from './http/you-tube-search/you-tube-search-injectables';
import { SearchBoxComponent } from './http/you-tube-search/search-box.component';
import { SearchResultComponent } from './http/you-tube-search/search-result.component';
import { SearchSearchComponent } from './http/you-tube-search/search-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    DemoSkuFormComponent,
    DemoSkuFormBuilderComponent,
    DemoSkuFormBuilderWithCustomValidatorComponent,
    ManualInjectorComponent,
    SimpleHttpComponent,
    SearchBoxComponent,
    SearchResultComponent,
    SearchSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AnalyticDemoModule,
    HttpClientModule
  ],
  providers: [
    Service1Service, 
    Service2Service,
    {provide: "APP_URL", useValue: "accounts.vahanacloud.com"},
    youTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

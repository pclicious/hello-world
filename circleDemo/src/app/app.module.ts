import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    EasyPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

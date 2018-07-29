import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { ChartModule } from 'angular2-chartjs';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AngularSplitModule,
    ChartModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

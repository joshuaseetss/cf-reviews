import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalForm } from './modal-form';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartjsModule } from 'ng-chartjs';
import { ReviewsChartComponent } from './reviews-chart/reviews-chart.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalForm,
    ReviewsChartComponent,
    ReviewsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,  //icons from font awesome
    NgbModule, //bootstrap for the modal 
    FormsModule,
    HttpClientModule,
    NgChartjsModule.registerPlugin([]) //this is for the chart.js visuals
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

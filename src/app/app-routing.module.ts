import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsChartComponent } from './reviews-chart/reviews-chart.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';

const routes: Routes = [
  //default path when URL is empty 
  { path: '', redirectTo: 'reviews-chart', pathMatch: 'full' },
  { path: 'reviews-chart', component: ReviewsChartComponent },
  { path: 'reviews-list', component: ReviewsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

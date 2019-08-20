import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-chart',
  templateUrl: './reviews-chart.component.html',
  styleUrls: ['./reviews-chart.component.scss']
})
export class ReviewsChartComponent implements OnInit {

  constructor() { }

  reviews: Array<object> = [];

  //chart.js properties 
  reviewsPieChartLabels: Array<string> = [
    "Good",
    "Ok",
    "Bad"
  ];
  reviewsPieChartOptions: Object = {
    responsive: true
  };
  reviewChartType = 'pie';
  reviewsPieChartLegend: boolean = true;
  reviewsPieChartData: Array<number> = [
    0,
    0,
    0
  ];
  reviewsPieChartColors = [
    {
      'backgroundColor': [
        'rgba(0, 128, 0, 0.6)',
        'rgba(255, 165, 0, 0.6)',
        'rgba(255, 0, 0, 0.6)'
      ],
      'pointHoverBackgroundColor': [
        'rgba(0, 128, 0, 1)',
        'rgba(255, 165, 0, 1)',
        'rgba(255, 0, 0, 1)'
      ]
    }
  ];

  ngOnInit() {
    let storedReviews = localStorage.getItem('reviews');

    if (storedReviews) {
      //adding the stored reviews from the browser into the reviews array, if there are any 
      this.reviews = JSON.parse(storedReviews);
    }
  }

  // receiving the review event from onSubmit() function in the modal form 
  receivePostedReview(review) {
    //push combines 2 arrays 
    this.reviews.push(review);
    //putting the review in the browser storage 
    localStorage.setItem('reviews', JSON.stringify(this.reviews));
  }
}

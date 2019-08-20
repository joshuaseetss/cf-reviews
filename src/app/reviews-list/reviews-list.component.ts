import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss']
})
export class ReviewsListComponent implements OnInit {

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
    //receive the data from browser storage and parse them
    let storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      this.reviews = JSON.parse(storedReviews);
      this.updateChart();
    }
  }

  updateChart() {
    this.reviewsPieChartData = this.reviewsPieChartData.map((value, index) => {
      let percentage = ((this.reviews.filter(review => review['rating'] === index).length / this.reviews.length) * 100);
      let percentageString = percentage.toFixed(0);
      percentage = parseInt(percentageString, 10);
      return percentage;
    });
  }


}

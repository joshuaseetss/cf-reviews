import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsChartComponent } from './reviews-chart.component';

describe('ReviewsChartComponent', () => {
  let component: ReviewsChartComponent;
  let fixture: ComponentFixture<ReviewsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

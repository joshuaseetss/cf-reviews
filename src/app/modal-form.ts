import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faGrin } from '@fortawesome/free-regular-svg-icons';
import { faMeh } from '@fortawesome/free-regular-svg-icons';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { User } from './user';
import { ReviewsService } from './reviews.service'


@Component({
  selector: 'ngbd-modal-form',
  templateUrl: './modal-form.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
    .custom-radio-buttons .ng-fa-icon {
      font-size: 50px;
      color: gray;
    }
    .custom-radio-buttons .ng-fa-icon.selected.happy {
      color: green;
    }
    .custom-radio-buttons .ng-fa-icon.selected.meh {
      color: orange;
    }
    .custom-radio-buttons .ng-fa-icon.selected.sad {
      color: red;
    }
  `]
})
export class NgbdModalForm {
  
  closeResult: string;

  icons = [
    {
      iconName: 'happy',
      icon: faGrin,
      value: 0,
      text: "Good"
    },
    {
      iconName: 'meh',
      icon: faMeh,
      value: 1,
      text: "OK"
    },
    {
      iconName: 'sad',
      icon: faFrown,
      value: 2,
      text: "Bad"
    }
  ];

  model = {
    name: {
      value: ''
    },
    selectedIcon: this.icons[0],
    comment: {
      maxLength: 300,
      value: ''
    }
  };

  selectIcon(selectedIcon) {

    this.model.selectedIcon = selectedIcon;
    this.userModel.rating = selectedIcon.value;

  }

  getModel() {

    return {
      name: this.model.name.value,
      rating: this.model.selectedIcon.value,
      comment: this.model.comment.value
    };
  }

  submitted = false; 

  constructor(private modalService: NgbModal, private _reviewsService: ReviewsService) {}

  userModel = new User(this.model.name.value, this.model.selectedIcon.value, this.model.comment.value);

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  onSubmit() {

    this._reviewsService.review(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      )
      this.submitted = true;

  }
}
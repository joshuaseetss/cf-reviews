import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faGrin } from '@fortawesome/free-regular-svg-icons';
import { faMeh } from '@fortawesome/free-regular-svg-icons';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { User } from './user';
import { ReviewService } from './review.service';


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
    .custom-radio-buttons > div {
      font-size: 50px;
      color: gray;
      cursor: pointer;
    }
    .custom-radio-buttons > div.selected.happy {
      color: green;
    }
    .custom-radio-buttons > div.selected.meh {
      color: orange;
    }
    .custom-radio-buttons > div.selected.sad {
      color: red;
    }
    .custom-radio-buttons > div .display-text {
      font-size: 1rem;
    }
  `]
})
export class NgbdModalForm {

  closeResult: string;

  submitted = false;

  selectedIcon = false;

  constructor(private modalService: NgbModal, private _reviewService: ReviewService) {}

  icons = [
    {
      iconName: 'happy',
      icon: faGrin,
      value: 0,
      displayText: 'Good'
    },
    {
      iconName: 'meh',
      icon: faMeh,
      value: 1,
      displayText: 'OK'
    },
    {
      iconName: 'sad',
      icon: faFrown,
      value: 2,
      displayText: 'Bad'
    }
  ];

  model = {
    name: {
      value: ''
    },
    selectedIcon: null,
    comment: {
      maxLength: 300,
      value: ''
    }
  };

  selectIcon(selectedIcon) {

    this.model.selectedIcon = selectedIcon;
    this.userModel.rating = selectedIcon.value;
    this.selectedIcon = true;

  }

  getModel() {

    return {
      name: this.model.name.value,
      rating: this.model.selectedIcon ? this.model.selectedIcon.value : -1,
      comment: this.model.comment.value
    };
  }

  //creating user object after initalising them with the values. 
  userModel = new User(this.model.name.value, null, this.model.comment.value);

  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  onSubmit() {

    this._reviewService.review(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      )
      this.submitted = true;
  }


}
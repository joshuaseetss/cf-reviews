import { Component } from '@angular/core';
import { faGrin } from '@fortawesome/free-regular-svg-icons';
import { faMeh } from '@fortawesome/free-regular-svg-icons';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { NgbdModalForm } from './modal-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'createReview';
  faGrin = faGrin;
  faMeh = faMeh;
  faFrown = faFrown; 
  modalForm = NgbdModalForm; 
}

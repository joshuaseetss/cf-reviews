import { Component } from '@angular/core';
import { NgbdModalForm } from './modal-form';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'createReview';
  modalForm = NgbdModalForm; 
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalForm } from './modal-form';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    NgbdModalForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,  //icons from font awesome
    NgbModule //bootstrap for the modal 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

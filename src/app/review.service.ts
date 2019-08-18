import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

 
  _url='http://localhost:3000/review';
  
  constructor(private _http: HttpClient) { }

  review(user: User) {
    
    return this._http.post<any>(this._url, user);

  }
}

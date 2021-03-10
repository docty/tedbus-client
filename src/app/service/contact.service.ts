import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'https://tedbusadmin.herokuapp.com/api';
  constructor(private httpCient: HttpClient) { }


  sendContact(data){
    return this.httpCient.post(`${this.url}/contact`, data);
  }
}

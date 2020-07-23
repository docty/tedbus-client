import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'http://127.0.0.1:8000/api';
  constructor(private httpCient: HttpClient) { }


  sendContact(data){
    return this.httpCient.post(`${this.url}/contact`, data);
  }
}

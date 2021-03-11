import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedataService } from './sharedata.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'http://127.0.0.1:8000/api';
  constructor(private shareData: SharedataService, private httpCient: HttpClient) { }

  sendClient(){
    const data = {
      firstName: this.shareData.passenger.firstName,
	  lastName: this.shareData.passenger.lastName,
      email: this.shareData.passenger.email,
      mobile: this.shareData.passenger.mobile
    };
    return this.httpCient.post(`${this.url}/customers`, data);
  }

  sendBook(){
    const data = {
      source: this.shareData.outcome.pickup,
      destination: this.shareData.outcome.dropoff,
      passenger: this.shareData.outcome.people,
      busName: this.shareData.bus.name,
      price: this.shareData.bus.price,
      depDate: this.shareData.outcome.dep_date,
      mobile: this.shareData.passenger.mobile
    };
	this.sendClient().subscribe();
    return this.httpCient.post(`${this.url}/bookings`, data);
  }
}

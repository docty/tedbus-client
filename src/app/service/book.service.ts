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
      fullName: this.shareData.passenger.fullname,
      email: this.shareData.passenger.email,
      phoneNumber: this.shareData.passenger.phone,
      city: this.shareData.passenger.city
    };
    console.log(data);
    return this.httpCient.post(`${this.url}/client`, data);
  }

  sendBook(){
    const data = {
      pickup: this.shareData.outcome.pickup,
      dropoff: this.shareData.outcome.dropoff,
      passengers: this.shareData.outcome.people,
      busType: this.shareData.bus.name,
      price: this.shareData.bus.price,
      dep_date: this.shareData.outcome.dep_date,
      paymentType: this.shareData.passenger.payment,
      phoneNumber: this.shareData.passenger.phone,
      email: this.shareData.passenger.email
    };
    this.sendClient().subscribe();

    return this.httpCient.post(`${this.url}/book`, data);
  }
}

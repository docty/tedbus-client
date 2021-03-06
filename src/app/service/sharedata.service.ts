import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  constructor() { }

  outcome = {
    dep_date : '',
    pickup: '',
    dropoff: '',
    people: ''
  };

  bus = {
    name : '',
    price : ''
  };

  passenger = {
    firstName : '',
    mobile : '',
    email : '',
	lastName: ''
  };
}

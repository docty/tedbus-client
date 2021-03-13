import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {


  public outcome: IOutcome = {
    depDate : '',
    pickup: '',
    dropoff: '',
    people: ''
  };

  public bus: IBus = {
    name : '',
    price : ''
  };

  public passenger: IPassenger = {
    firstName : '',
    mobile : '',
    email : '',
	  lastName: ''
  };
}

interface IOutcome {
  depDate : string;
  pickup: string;
  dropoff: string;
  people: string;  
} 

interface IBus {
  name: string;
  price: string;
}

interface IPassenger {
  firstName : string;
  mobile : string;
  email : string;
  lastName: string;
}
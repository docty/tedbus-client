import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../../service/sharedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styles: [
  ]
})
export class PassengerComponent implements OnInit {

  outcome: any;
  bus: any;
  passenger = {
    fullname: '',
    phone: '',
    email: '',
    city: '',
    payment: '',
    promo: ''
  };
  constructor(private sharedataService: SharedataService, private router: Router) { }

  ngOnInit(): void {
    this.outcome = this.sharedataService.outcome;
    this.bus = this.sharedataService.bus;

    if (this.outcome.dep_date === '' || this.outcome.pickup === '' ||
    this.outcome.dropoff === '' || this.outcome.people === '' || this.bus.name === ''  ||
    this.bus.price === '' ){
      // this.router.navigateByUrl('/');
    }
    this.outcome = this.sharedataService.outcome;

  }

  submitPassenger(){
    this.sharedataService.passenger = this.passenger;
    this.router.navigateByUrl('/confirmation');
  }

}

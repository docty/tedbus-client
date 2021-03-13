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

  constructor(private sharedataService: SharedataService, private router: Router) { }
  
  public passenger = this.sharedataService.passenger;
  public outcome = this.sharedataService.outcome;
  public bus = this.sharedataService.bus;

  ngOnInit(): void {
    const { bus } = this.sharedataService;
    const verify = Object.values(bus).every((item:string) => item !== '');
    if (!verify){
      this.router.navigateByUrl('/');
    }
  }

  submitPassenger(){
    const verify = Object.values(this.passenger).every((item:string) => item !== '');
    if (verify) {
      this.sharedataService.passenger = this.passenger;
      this.router.navigateByUrl('/confirmation');
    }
  }

  getTotal(people: string, price: string){
    return parseInt(people) * parseFloat(price);
  }

}

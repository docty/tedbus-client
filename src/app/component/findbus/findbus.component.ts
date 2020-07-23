import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../../service/sharedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findbus',
  templateUrl: './findbus.component.html',
  styles: [
  ]
})
export class FindbusComponent implements OnInit {

  constructor(private sharedataService: SharedataService, private router: Router) { }
  outcome: any;
  buses = [
    {name: ' VIP', price: '54.00'},
    {name: ' STC', price: '40.00'}
  ];
  ngOnInit(): void {
    this.outcome = this.sharedataService.outcome;
    if (this.outcome.dep_date === '' || this.outcome.pickup === '' ||
    this.outcome.dropoff === '' || this.outcome.people === '' ){
      // this.router.navigateByUrl('/');
    }

  }

  busType($event){
    if ($event === 1) {
      this.sharedataService.bus = this.buses[0];
    }
    else {
      this.sharedataService.bus = this.buses[1];
    }
    this.router.navigateByUrl('/book-1');
  }

}

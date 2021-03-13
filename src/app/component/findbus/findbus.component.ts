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
  
  public buses = [
    {url: './../../../assets/images/learning/vip.jpg', name: ' VIP', price: '54.00', estimatedTime: '50mins'},
    {url: './../assets/images/learning/stc-001.jpg', name: ' STC', price: '40.00', estimatedTime: '1hr 25mins'}
  ];

  ngOnInit(): void {
    const { outcome } = this.sharedataService;
    const verify = Object.values(outcome).every((item:string) => item !== '');
    if (!verify){
      this.router.navigateByUrl('/');
    }
  }

  busType($event){
    this.sharedataService.bus = this.buses.find(item => item.name === $event);
    this.router.navigateByUrl('/book-1');
  }

}

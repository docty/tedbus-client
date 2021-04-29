import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../../service/sharedata.service';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findbus',
  templateUrl: './findbus.component.html',
  styles: [
  ]
})
export class FindbusComponent implements OnInit {

  constructor(private sharedataService: SharedataService, private bookService: BookService, private router: Router) { }
  public id = 0;
  
  //public buses = [
   // {url: './../../../assets/images/learning/vip.jpg', name: ' VIP', price: '54.00', estimatedTime: '50mins'},
    //{url: './../assets/images/learning/stc-001.jpg', name: ' STC', price: '40.00', estimatedTime: '1hr 25mins'}
  //];
  public buses:any[] = [];
  objectKeys = Object.keys;
  ngOnInit(): void {
    const { outcome } = this.sharedataService;
	  this.bookService.getBus().subscribe((t: any) => {
		  this.buses = t;
	  });
    const verify = Object.values(outcome).every((item:string) => item !== '');
    if (!verify){
      //this.router.navigateByUrl('/');
    }
  }

  busType($event){
    this.sharedataService.bus = this.buses[0]['VIP'].find(item => item.name === $event);
    this.router.navigateByUrl('/book-1');
  }

  itemClick($value: number) {
    this.id = $value;
    
  }

}

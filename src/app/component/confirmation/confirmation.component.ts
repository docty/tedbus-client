import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../../service/sharedata.service';
import { Router } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
    '.btn {background-color:forestgreen; padding:15px; width:100%; margin-bottom:10px}'
  ]
})
export class ConfirmationComponent implements OnInit {

  public outcome = this.sharedataService.outcome;
  public bus = this.sharedataService.bus;
  public passenger = this.sharedataService.passenger;

  constructor(private sharedataService: SharedataService, 
    private router: Router, private bookService: BookService) { 
    const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      document.body.appendChild(script);
    }

  ngOnInit(): void {
    const { passenger } = this.sharedataService;
    const verify = Object.values(passenger).every((item:string) => item !== '');
    if (!verify){
      this.router.navigateByUrl('/');
    }
  }

  payment(){
    this.bookService.proceed();
  }

  getTotal(people: string, price: string){
    return parseInt(people) * parseFloat(price);
  }
}

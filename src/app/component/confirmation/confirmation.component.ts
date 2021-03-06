import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../../service/sharedata.service';
import { Router } from '@angular/router';
import swal from '../../../assets/js/sweetalert.min';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styles: [
    '.btn {background-color:forestgreen; padding:15px; width:100%; margin-bottom:10px}'
  ]
})
export class ConfirmationComponent implements OnInit {

  outcome: any;
  bus: any;
  passenger: any;

  constructor(private sharedataService: SharedataService, private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.outcome = this.sharedataService.outcome;
    this.bus = this.sharedataService.bus;
    this.passenger = this.sharedataService.passenger;

    if (this.outcome.dep_date === '' || this.outcome.pickup === '' ||
    this.outcome.dropoff === '' || this.outcome.people === '' || this.bus.name === ''  ||
    this.bus.price === '' || this.passenger.firstName === '' || this.passenger.mobile === '' ){
       //this.router.navigateByUrl('/');
    }
  }


  orderNow(){
    swal({
        title: 'Are you sure to confirm order now ?',
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: 'green',
        confirmButtonText: 'Yes, I confirm',
        cancelButtonText: 'No, cancel ',
        closeOnConfirm: false,
        closeOnCancel: true
      },
      (isConfirm) => {
        if (isConfirm) {
          swal('Congratulation!', 'You will be notified via email and mobile provided.', 'success');
          return this.bookService.sendBook().subscribe();
        } else {
          swal('Cancelled', 'Sorry, We are still waiting for you', 'error');
        }
    });

  }

  }

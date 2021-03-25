import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedataService } from './sharedata.service';
declare var swal: any;
declare var PaystackPop: any;
declare var grecaptcha: any;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = 'https://tedbusadmin.herokuapp.com/api';
  constructor(private shareData: SharedataService, private httpCient: HttpClient) { }

  sendClient(){
    const data = {
      firstName: this.shareData.passenger.firstName,
	    lastName: this.shareData.passenger.lastName,
      email: this.shareData.passenger.email,
      mobile: this.shareData.passenger.mobile
    };
    return this.httpCient.post(`${this.url}/customers`, data);
  }

  sendBook(reference: string, transaction: any){
    const data = {
      source: this.shareData.outcome.pickup,
      destination: this.shareData.outcome.dropoff,
      passenger: this.shareData.outcome.people,
      busName: this.shareData.bus.name,
      price: this.shareData.bus.price,
      depDate: this.shareData.outcome.depDate,
      mobile: this.shareData.passenger.mobile,
      reference: reference,
      transaction: transaction
    };
	  this.sendClient().subscribe();
    return this.httpCient.post(`${this.url}/bookings`, data);
  }

  proceedToPayment(){
    const handler = PaystackPop.setup({
      key: 'pk_test_9e227a7e08906538d31690840dec472d31f5313a',
      email: this.shareData.passenger.email,
      amount: parseFloat(this.shareData.outcome.people) *  parseFloat(this.shareData.bus.price) * 100,
      currency: 'GHS',
      ref: ''+Math.floor((Math.random() * 1000000000) + 1),
      callback: (response: any) => {
        this.sendBook(response.reference, response.transaction).subscribe();
        swal('Congratulation!', 'You will be notified via mobile provided.', 'success');
        
        // message: "Approved"
        // reference: "814551669"
        // status: "success"
        // trans: "1038159965"
        // transaction: "1038159965"
        // trxref: "814551669"
        // Make an AJAX call to your server with the reference to verify the transaction
      },
      onClose: function() {
        alert('Transaction was not completed, window closed.');
      },
    });
    handler.openIframe();
  }

  recaptching() {
    grecaptcha.ready(() => {
      grecaptcha.execute('6LeWRo4aAAAAAPPvTVP3dz-p9wQAnUEZRTsqYyuQ')
      .then((token: any) => {
        this.httpCient.post(`${this.url}/token-verify`, {token: token}).subscribe((result) => {
			    if (result){
            this.proceedToPayment();
          }else{
            swal('Sorry!', 'Please try again', 'fail');
          }
		    });
      });
    });  
  }

  proceed(){
    this.recaptching();
  }
}

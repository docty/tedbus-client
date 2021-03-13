import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedataService } from './sharedata.service';
declare var swal: any;
declare var PaystackPop: any;

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
      key: 'pk_test_9e227a7e08906538d31690840dec472d31f5313a', // Replace with your public key
      email: this.shareData.passenger.email,
      amount: parseFloat(this.shareData.bus.price) * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
      currency: 'GHS',
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // Replace with a reference you generated
      callback: (response) => {
        //this happens after the payment is completed successfully
        this.sendBook(response.reference, response.transaction).subscribe();
        //const reference = response.reference;
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
}

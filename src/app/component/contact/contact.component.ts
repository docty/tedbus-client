import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import swal from '../../../assets/js/sweetalert.min';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {


  contact = {
    fullName: '',
    email: '',
    comments: ''
  };
  constructor(private contactService: ContactService ) { }

  ngOnInit(): void {

  }

  submitData(){
    this.contactService.sendContact(this.contact).subscribe(
      swal({
        title:  'Message Sent',
        type:  'success'
      })
    );
    this.contact.fullName = '',
    this.contact.email = '',
    this.contact.comments = '';
  }

}

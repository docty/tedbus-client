import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedataService } from '../../service/sharedata.service';
import swal from '../../../assets/js/sweetalert.min';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    'fieldset {display:none;}'
  ]
})
export class HomeComponent implements OnInit {

  outcome = {
    dep_date : '',
    pickup: '',
    dropoff: '',
    people: ''
  };

  constructor(private router: Router, private sharedataService: SharedataService) { }

  ngOnInit(): void {
    $('#dep-date,#ret-date').datetimepicker({
      showMillisec: false,
      showMicrosec: false,
      showTimezone: false,
      numberOfMonths: 1,
      addSliderAccess: true,
      sliderAccessArgs: { touchonly: false }
      });
  }

  findbus(){
    this.outcome.dep_date = $('#dep-date').val();
    this.validateData();
  }


  validateData(){
    if (this.outcome.dep_date === '' || this.outcome.pickup === '' || this.outcome.dropoff === '' || this.outcome.people === '' )
    {
      swal({
            title: 'Sorry',
            text: 'Please fill all spaces.'
        });

    }  else {
      this.sharedataService.outcome = this.outcome;
      this.router.navigateByUrl('/search-bus');
    }
  }
}

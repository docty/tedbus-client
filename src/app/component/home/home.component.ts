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

  constructor(private router: Router, private sharedataService: SharedataService) { }

  public outcome = this.sharedataService.outcome;
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
    this.sharedataService.outcome.depDate = $('#dep-date').val();
    this.validateData();
  }

  validateData(){
    const verify = Object.values(this.outcome).every((item:string) => item !== '');
    
    if (!verify){
      return swal({title: 'Sorry', text: 'Please fill all spaces.'});
    }
    if (this.outcome.pickup === this.outcome.dropoff){
      return swal({title: 'Sorry', text: 'Please you cannot select same location'});
    }
    this.router.navigateByUrl('/search-bus'); 
  }
}

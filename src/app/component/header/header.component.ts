import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('li').on('click', () => {
      $(this).css('fontSize', '40px');
      console.log($('li').attr('data-item'));

    });

  }

}

import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.single').hide().first().show();
    $('.categories li:first').addClass('active');

    $('.categories a').on('click', function(e) {
        e.preventDefault();
        $(this).closest('li').addClass('active').siblings().removeClass('active');
        $($(this).attr('href')).show().siblings('.single').hide();
    });

    const hash = $.trim( window.location.hash );
    if (hash) { $('.categories a[href$="' + hash + '"]').trigger('click'); }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tedbus';

  constructor() { 
    const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6LeWRo4aAAAAAPPvTVP3dz-p9wQAnUEZRTsqYyuQ';
      document.body.appendChild(script);
    }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FindbusComponent } from './component/findbus/findbus.component';
import { HomeComponent } from './component/home/home.component';
import { PassengerComponent } from './component/passenger/passenger.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { TaskComponent } from './component/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindbusComponent,
    HomeComponent,
    PassengerComponent,
    ConfirmationComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

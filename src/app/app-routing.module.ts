import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FindbusComponent } from './component/findbus/findbus.component';
import { PassengerComponent } from './component/passenger/passenger.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { TaskComponent } from './component/task/task.component';







const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search-bus', component: FindbusComponent},
  {path: 'book-1', component: PassengerComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'services', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About Khepra' },
  { path: 'history', component: HistoryComponent, title: 'History' },
  { path: 'appointments', component: AppointmentsComponent, title: 'Make an Appointment' },
  { path: 'contact', component: ContactComponent, title: 'Contact Khepra'}

];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    AppointmentsComponent,
    ContactComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    AppointmentsComponent,
    ContactComponent
    ]
})
export class AppRoutingModule { }

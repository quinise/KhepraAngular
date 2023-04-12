import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'appointments', component: AppointmentsComponent},
  { path: 'contact', component: ContactComponent}

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

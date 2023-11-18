// This file defines the app's routes
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';
import { ReikiComponent } from './reiki/reiki.component';
import { IfaComponent } from './ifa/ifa.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Khepra Ptah' },
  { path: 'about', component: AboutComponent, title: 'About Khepra' },
  { path: 'history', component: HistoryComponent, title: 'History' },
  { path: 'reiki', component: ReikiComponent, title: 'Reiki' },
  { path: 'ifa', component: IfaComponent, title: 'IFA' },
  { path: 'contact', component: ContactComponent, title: 'Contact Khepra'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: []
})
export class AppRoutingModule { }

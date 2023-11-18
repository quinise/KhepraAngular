import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ContactBarComponent } from '../contact-bar/contact-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  imports: [NavComponent, ContactBarComponent, FooterComponent]
})
export class HistoryComponent {

}

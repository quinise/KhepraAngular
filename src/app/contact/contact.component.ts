import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ContactBarComponent } from '../contact-bar/contact-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [NavComponent, ContactBarComponent, FooterComponent]
})
export class ContactComponent {

}

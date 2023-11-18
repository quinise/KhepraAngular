import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ContactBarComponent } from '../contact-bar/contact-bar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NavComponent, ContactBarComponent, FooterComponent]
})
export class HomeComponent {
}

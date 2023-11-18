import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ContactBarComponent } from '../contact-bar/contact-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [NavComponent, ContactBarComponent, FooterComponent]
})
export class AboutComponent {

}

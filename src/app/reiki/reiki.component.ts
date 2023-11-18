import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ContactBarComponent } from '../contact-bar/contact-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-reiki',
  templateUrl: './reiki.component.html',
  styleUrls: ['./reiki.component.css'],
  imports: [NavComponent, ContactBarComponent, FooterComponent]

})
export class ReikiComponent {

}

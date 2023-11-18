import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ContactBarComponent } from '../contact-bar/contact-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-ifa',
  templateUrl: './ifa.component.html',
  styleUrls: ['./ifa.component.css'],
  imports: [NavComponent, ContactBarComponent, FooterComponent]
})
export class IfaComponent {

}

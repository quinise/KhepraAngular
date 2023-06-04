import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name  = 'Home';

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'yellow');
  }
}

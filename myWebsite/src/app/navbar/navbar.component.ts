import { Component } from '@angular/core';
import { fade, slidedown, slidedown2, slidedown3 } from '../animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
      fade, slidedown, slidedown2, slidedown3
  ]
})
export class NavbarComponent {
  // showFiller = false;
}

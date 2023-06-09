import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  standalone: true,
  imports: [MatTabsModule],
})
export class NavbarComponent {}
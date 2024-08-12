import { fade, slide, slidedown, slidedown2, slidedown3 } from './animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fade, slide, slidedown, slidedown2, slidedown3 ]
})
export class AppComponent {
  title = 'myWebsite';
  showFiller = false;

  selectedTab: string = 'aboutme'; // Default tab

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}

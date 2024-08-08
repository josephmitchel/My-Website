import { Component } from '@angular/core';
import { fade, fade2, fade3, slide } from '../animations';

@Component({
  selector: 'tab-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  
  animations: [
      fade, fade2, fade3, slide
    ]
})
export class AboutMeTab {
  defaultElevation = 2;
  raisedElevation = 8;

  titles = ['title1', 'title2', 'title3'];
  titleSelected: any;

  name = 'Angular';

  select(title: any) {
    this.titleSelected = title;
  }
}

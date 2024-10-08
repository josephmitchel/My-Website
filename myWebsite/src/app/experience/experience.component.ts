import { Component } from '@angular/core';
import { fade, fade2 } from '../animations';

@Component({
  selector: 'tab-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [fade, fade2]
})
export class ExperienceTab {
  defaultElevation = 0;
  raisedElevation = 8;

  titles = ['title1', 'title2', 'title3'];
  titleSelected: any;

  name = 'Angular';

  select(title: any) {
    this.titleSelected = title;
  }
}

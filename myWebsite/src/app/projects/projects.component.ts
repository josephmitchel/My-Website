import { Component } from '@angular/core';
import { fade, fade2 } from '../animations';

@Component({
  selector: 'tab-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fade, fade2]
})
export class ProjectsTab {

}

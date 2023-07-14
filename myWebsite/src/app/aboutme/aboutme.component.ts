import { Component } from '@angular/core';
import { fade, slide } from '../animations';

@Component({
  selector: 'tab-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  
  animations: [
      fade, slide
    ]
})
export class AboutMeTab {

}

import { Component } from '@angular/core';
import { fade, slide } from '../animations';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  animations: [
      fade, slide
    ]
})
export class HomePage {

}

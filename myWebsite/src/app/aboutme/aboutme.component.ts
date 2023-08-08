import { Component } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, pulseOnEnterAnimation, pulseAnimation, bounceAnimation } from 'angular-animations';

@Component({
  selector: 'tab-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  
  animations: [
      fadeInOnEnterAnimation(), 
      fadeOutOnLeaveAnimation(), 
      pulseOnEnterAnimation(), 
      pulseAnimation({ scale: 1.01, direction: '=>' }),
      bounceAnimation(),
    ]
})
export class AboutMeTab {
  titleHover: boolean = false;
  cardHover: boolean = false;
}

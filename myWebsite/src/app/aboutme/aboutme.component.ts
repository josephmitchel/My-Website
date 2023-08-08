import { Component } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, pulseOnEnterAnimation, pulseAnimation, heartBeatOnEnterAnimation, shakeAnimation } from 'angular-animations';

@Component({
  selector: 'tab-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  
  animations: [
      fadeInOnEnterAnimation(), 
      fadeOutOnLeaveAnimation(), 
      pulseOnEnterAnimation(), 
      pulseAnimation({ scale: 1.01, direction: '=>' }),
      heartBeatOnEnterAnimation({ scale: 1.1 }),
      shakeAnimation({ translate: '1px', direction: '=>' })
    ]
})
export class AboutMeTab {
  titleHover: boolean = false;
  cardHover: boolean = false;
  educationHover: boolean = false;
  experienceHover: boolean = false;
  projectsHover: boolean = false;
}

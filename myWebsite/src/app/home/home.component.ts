import { Component } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, pulseOnEnterAnimation, pulseAnimation, heartBeatOnEnterAnimation, heartBeatAnimation } from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  animations: [
      fadeInOnEnterAnimation(), 
      fadeOutOnLeaveAnimation(), 
      pulseOnEnterAnimation(), 
      pulseAnimation({ scale: 1.01, direction: '=>' }),
      heartBeatOnEnterAnimation({ scale: 1.1 }),
      heartBeatAnimation({ scale: 1.05, direction: '=>' })
    ]
})
export class HomeComponent {
  panelOpenState: boolean = false;
  titleHover: boolean = false;
  cardHover: boolean = false;
  educationHover: boolean = false;
  experienceHover: boolean = false;
  projectsHover: boolean = false;
}

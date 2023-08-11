import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { 
  fadeInOnEnterAnimation, 
  fadeOutOnLeaveAnimation, 
  pulseOnEnterAnimation, 
  pulseAnimation, 
  heartBeatOnEnterAnimation, 
  heartBeatAnimation,
  slideOutRightOnLeaveAnimation } from 'angular-animations';

export interface Format {
  hover: boolean;
  icon: string;
  title: string;
}

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
      heartBeatAnimation({ scale: 1.05, direction: '=>' }),
      slideOutRightOnLeaveAnimation(),

    ]
})
export class HomeComponent {
  constructor(private sharedService: SharedService) { }
  panelOpenState: boolean = false;
  titleHover: boolean = false;
  cardHover: boolean = false;
  educationHover: boolean = false;
  experienceHover: boolean = false;
  projectsHover: boolean = false;

  buttons: Format[] = [
    {
      hover: this.educationHover,
      icon: 'fa-solid fa-school fa-lg',
      title: 'Education'
    },
    {
      hover: this.experienceHover,
      icon: 'fa-solid fa-briefcase fa-lg',
      title: 'Experience'
    },
    {
      hover: this.projectsHover,
      icon: 'fa-solid fa-project-diagram fa-lg',
      title: 'Projects'
    }
  ]

  // Methods for changing the display
  changeDisplay(page: string): void {
    this.sharedService.displayManager(page);
  }
}

import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { 
  fadeInOnEnterAnimation, 
  bounceInRightOnEnterAnimation, 
  jelloOnEnterAnimation, pulseAnimation, 
  rubberBandOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInLeftOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    bounceInRightOnEnterAnimation(), 
    jelloOnEnterAnimation(), 
    rubberBandOnEnterAnimation(),
    pulseAnimation({ scale: 1.25, direction: '=>'}),
    fadeOutOnLeaveAnimation({ duration: 200 }),
    slideInLeftOnEnterAnimation({ duration: 1000 }),
  ]
})
export class AppComponent {
  constructor(private sharedService: SharedService) { }

  title = 'myWebsite';
  instagramHover: boolean = false;
  linkedinHover: boolean = false;
  githubHover: boolean = false;
  homeHover: boolean = false;

  // Methods that determine what is displayed
  displayHome(): boolean {if (this.sharedService.DisplayHome) { return true } else { return false } }
  displayEducation(): boolean {if (this.sharedService.DisplayEducation) { return true } else { return false } }

  // Methods for changing the display
  changeDisplayToHome(): void {this.sharedService.changeDisplayToHome()}
  changeDisplayToEducation(): void {this.sharedService.changeDisplayToEducation()}
}
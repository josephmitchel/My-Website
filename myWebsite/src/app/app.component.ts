import { Component } from '@angular/core';
import { fadeInOnEnterAnimation, bounceInRightOnEnterAnimation, jelloOnEnterAnimation, pulseAnimation, rubberBandOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    bounceInRightOnEnterAnimation(), 
    jelloOnEnterAnimation(), 
    rubberBandOnEnterAnimation(),
    pulseAnimation({ scale: 1.25, direction: '=>'}) ]
})
export class AppComponent {
  title = 'myWebsite';
  instagramHover: boolean = false;
  linkedinHover: boolean = false;
  githubHover: boolean = false;
  homeHover: boolean = false;
}

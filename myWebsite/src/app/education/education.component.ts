import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { 
  fadeInOnEnterAnimation, 
  pulseOnEnterAnimation,
  heartBeatOnEnterAnimation,
  pulseAnimation  } from 'angular-animations';

export interface Format {
  name: string;
  description: string;
  delay: number;
  hover: boolean;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    pulseOnEnterAnimation(),
    heartBeatOnEnterAnimation({ scale: 1.1 }),
    pulseAnimation({ scale: 1.05, direction: '=>' }),
  ]
})

export class EducationComponent {
  buHover: boolean = false;
  cofcHover: boolean = false;
  sjcHover: boolean = false;

  schools: Format[] = [
    {
      name: 'Boston University',
      description: '2021-2024',
      delay: 150,
      hover: this.buHover
    },
    {
      name: 'College of Charleston',
      description: '2020-2021',
      delay: 300,
      hover: this.cofcHover
    },
    {
      name: 'St. John\'s College High School',
      description: '2016-2020',
      delay: 450,
      hover: this.sjcHover
    },
  ];
}

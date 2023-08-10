import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import { 
  fadeInOnEnterAnimation, 
  pulseOnEnterAnimation,
  heartBeatOnEnterAnimation,
  pulseAnimation  } from 'angular-animations';

export interface Format {
  name: string;
  attendance: string;
  description: string;
  delay: number;
  hover: boolean;
  image: string;
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
  titleHover: boolean = false;
  buHover: boolean = false;
  cofcHover: boolean = false;
  sjcHover: boolean = false;

  schools: Format[] = [
    {
      name: 'Boston University',
      attendance: '2021-2024',
      description: 'Computer Science',
      delay: 150,
      hover: this.buHover,
      image: './../../assets/bostonuniversity2.jpg'
    },
    {
      name: 'College of Charleston',
      attendance: '2020-2021',
      description: 'Computer Science',
      delay: 300,
      hover: this.cofcHover,
      image: './../../assets/charleston1.jpg'
    },
    {
      name: 'St. John\'s College High School',
      attendance: '2016-2020',
      description: 'High School Diploma',
      delay: 450,
      hover: this.sjcHover,
      image: './../../assets/stjohns1.jpg'
    },
  ];
}

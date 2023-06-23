import { state, style, transition, trigger, animate } from '@angular/animations';

export let fade = trigger('fade', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
    ])
  ])

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-20px)' }),
        animate(1000)
    ]),
    transition(':leave', [
        animate(1000, style({ transform: 'translateX(-100%)' }))
    ])
    ])


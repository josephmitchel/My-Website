import { state, style, transition, trigger, animate } from '@angular/animations';

export let fade = trigger('fade', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(800)
    ])
])

export let fade2 = trigger('fade2', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(1200)
    ])
])

export let fade3 = trigger('fade3', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(1600)
    ])
])

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-25px)' }),
        animate(800)
    ]),
])

export let slidedown = trigger('slidedown1', [
    transition(':enter', [
        style({ transform: 'translate(-75px, -75px)' }),
        animate(500)
    ]),
])

export let slidedown2 = trigger('slidedown2', [
    transition(':enter', [
        style({ transform: 'translate(-100px, -100px)' }),
        animate(750)
    ]),
])

export let slidedown3 = trigger('slidedown3', [
    transition(':enter', [
        style({ transform: 'translate(-125px, -125px)' }),
        animate(1000)
    ]),
])

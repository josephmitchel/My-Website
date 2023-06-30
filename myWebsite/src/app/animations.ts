import { state, style, transition, trigger, animate } from '@angular/animations';

export let fade = trigger('fade', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(800)
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
        style({ transform: 'translateX(-75px)' }),
        animate(800)
    ]),
])

export let slidedown2 = trigger('slidedown2', [
    transition(':enter', [
        style({ transform: 'translateX(-100px)' }),
        animate(800)
    ]),
])

export let slidedown3 = trigger('slidedown3', [
    transition(':enter', [
        style({ transform: 'translateX(-125px)' }),
        animate(800)
    ]),
])


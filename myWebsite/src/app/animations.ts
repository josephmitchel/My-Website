import { state, style, transition, trigger, animate } from '@angular/animations';

export let fade = trigger('fade', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
    ])
])

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-25px)' }),
        animate(1000)
    ]),
])

export let slidedown = trigger('slidedown1', [
    transition(':enter', [
        style({ transform: 'translateY(-25px)' }),
        animate(500)
    ]),
])

export let slidedown2 = trigger('slidedown2', [
    transition(':enter', [
        style({ transform: 'translateY(-50px)' }),
        animate(750)
    ]),
])

export let slidedown3 = trigger('slidedown3', [
    transition(':enter', [
        style({ transform: 'translateY(-75px)' }),
        animate(1000)
    ]),
])


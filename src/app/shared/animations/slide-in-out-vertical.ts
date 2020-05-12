import { animate, style, transition, group, trigger, state } from '@angular/animations';

export const slideInOutVertical = trigger('slideInOutVertical', [
  state('opened', style({
    height: '*',
    opacity: 1,
    'padding-bottom': '10px',
  })),
  state('closed', style({
    height: '0px',
    opacity: 1,
  })),
  transition(
    'opened => closed',
    [
      animate('350ms ease-in', style({ height: 0 }))
    ]
  ),
  transition(
    'closed => opened',
    [
      style({ opacity: 1 }),
      animate('350ms ease-out', style({ height: '*' }))
    ]
  ),
]);

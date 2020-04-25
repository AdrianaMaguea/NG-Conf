import { animate, style, transition, group, trigger, state } from '@angular/animations';
import { inherits } from 'util';

export const spinInOut = trigger('spinInOut', [
  transition(
    ':enter',
    [
      style({
        transform: 'scale(0) rotate(-90deg)',
      }),
      animate('200ms 215ms ease-out',
        style({
          transform: 'scale(1) rotate(0)',
        })
      )
    ]
  ),
  transition(
    ':leave',
    [
      style({
        transform: 'scale(1) rotate(0deg)',
      }),
      animate('200ms 0ms ease-out',
        style({
          transform: 'scale(0) rotate(90grad)',
        })
      )
    ]
  ),
]);

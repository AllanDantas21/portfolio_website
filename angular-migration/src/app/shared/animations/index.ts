import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

/**
 * Fade in and out animation
 */
export const fadeInOut = trigger('fadeInOut', [
  state('in', style({ opacity: 1 })),
  state('out', style({ opacity: 0 })),
  transition('in <=> out', animate('300ms ease-in-out'))
]);

/**
 * Scale in animation
 */
export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ transform: 'scale(0.9)', opacity: 0 }),
    animate('200ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('200ms ease-in', style({ transform: 'scale(0.9)', opacity: 0 }))
  ])
]);

/**
 * Slide in from left animation
 */
export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
  ])
]);

/**
 * Slide in from right animation
 */
export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
  ])
]);

/**
 * Fade in up animation
 */
export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ transform: 'translateY(20px)', opacity: 0 }),
    animate('400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({ transform: 'translateY(20px)', opacity: 0 }))
  ])
]);

/**
 * Bounce animation on hover
 */
export const hoverScale = trigger('hoverScale', [
  state('default', style({ transform: 'scale(1)' })),
  state('hover', style({ transform: 'scale(1.05)' })),
  transition('default <=> hover', animate('200ms ease-out'))
]);

/**
 * Rotate animation
 */
export const rotate = trigger('rotate', [
  state('default', style({ transform: 'rotate(0deg)' })),
  state('rotated', style({ transform: 'rotate(180deg)' })),
  transition('default <=> rotated', animate('300ms ease-out'))
]);

/**
 * Pulse animation (for loading states)
 */
export const pulse = trigger('pulse', [
  transition('* => *', [
    animate('1.5s', keyframes([
      style({ opacity: 1, offset: 0 }),
      style({ opacity: 0.5, offset: 0.5 }),
      style({ opacity: 1, offset: 1 })
    ]))
  ])
]);

/**
 * Bounce animation
 */
export const bounce = trigger('bounce', [
  transition(':enter', [
    animate('0.6s', keyframes([
      style({ transform: 'translateY(0)', offset: 0 }),
      style({ transform: 'translateY(-10px)', offset: 0.5 }),
      style({ transform: 'translateY(0)', offset: 1 })
    ]))
  ])
]);

/**
 * Shake animation
 */
export const shake = trigger('shake', [
  transition('shake', [
    animate('0.5s', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-5px)', offset: 0.25 }),
      style({ transform: 'translateX(5px)', offset: 0.75 }),
      style({ transform: 'translateX(0)', offset: 1 })
    ]))
  ])
]);

/**
 * Flip animation
 */
export const flip = trigger('flip', [
  state('default', style({ transform: 'rotateY(0deg)' })),
  state('flipped', style({ transform: 'rotateY(180deg)' })),
  transition('default <=> flipped', animate('400ms ease-out'))
]);

/**
 * Stagger animation (for lists)
 */
export const staggerIn = trigger('staggerIn', [
  transition('* => *', [
    animate('400ms', keyframes([
      style({ opacity: 0, offset: 0 }),
      style({ opacity: 1, offset: 1 })
    ]))
  ])
]);

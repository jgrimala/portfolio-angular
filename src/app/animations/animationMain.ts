import {
  transition,
  trigger,
  query,
  style,
  animate,
  stagger,
  animateChild,
  group,
} from '@angular/animations';

const resetRoute = [
  query(
    ':enter, :leave',
    [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
      }),
    ],
    { optional: true }
  ),
];

export const animationMain = [
/* Animation générale fade in/out aux changements de routes */
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter', [style({ opacity: 0 })], { optional: true }),

      query(':leave @*', animateChild(), { optional: true }),

      group([
        query(':leave', [animate('400ms ease-in', style({ opacity: 0 }))], {
          optional: true,
        }),

        query(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('400ms ease-out', style({ opacity: 1 })),
          ],
          { optional: true }
        ),
      ]),
      //query('@*', animateChild(), { optional: true }),
      query(':enter @*', animateChild(), { optional: true }),
    ]),
  ]),
/* Animation de la liste pour education-list */
  trigger('list', [
    transition('void => *', [
      query(':enter, @items', stagger(100, animateChild())),
    ]),
    transition('* => void', [
      query(':leave, @items', stagger(-100, animateChild())),
    ]),
  ]),
/* Animation des items de la liste pour education-list -> entrée du haut vers le centre*/
  trigger('items', [
    transition('void => *', [
      style({ transform: 'scale(0.5)', opacity: 0 }), // initial
      animate(
        '600ms cubic-bezier(0, -0.9, 0.2, 1.8)',
        style({ transform: 'scale(1)', opacity: 1 })
      ), // final
    ]),
    transition('* => void', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate(
        '400ms cubic-bezier(0.68, -0.3, 0.68, 0.19)',
        style({ transform: 'scale(0)', opacity: 0 })
      ),
    ]),
  ]),

/* Animation de la liste pour experience-list */
  trigger('list2', [
    transition('void => *', [
      query(':enter, @items2', stagger(60, animateChild())),
    ]),
    transition('* => void', [
      query(':leave, @items2', stagger(-60, animateChild())),
    ]),
    
  ]),
/* Animation des items de la liste pour experience-list -> entrée de la gauche vers le centre */
  trigger('items2', [
    transition('void => *', [
      style({ transform: 'translateX(-100%)', opacity: 0 }), // initial
      animate(
        '1s cubic-bezier(.8, -0.95, 0.2, 1.5)',
        style({ transform: 'translateX(0)', opacity: 1 })
      ), // final
    ]),
    transition('* => void', [
      style({ transform: 'translate(0)', opacity: 1 }),
      animate(
        '400ms cubic-bezier(0.68, -0.3, 0.68, 0.19)',
        style({ opacity: 0, transform: 'translate(-100%)' })
      ),
    ]),
  ]),

/* Animation de fade in/out pour les headers de l'accueil */
  trigger('fadeIn', [
    transition(':enter', [
      style({ transform: 'scale(0)', opacity: 0 }), // initial
      animate(
        '1s cubic-bezier(0.0, -0.8, 0.2, 1.0)',
        style({ transform: 'scale(1)', opacity: 1 })
      ), // final
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate(
        '400ms cubic-bezier(0.4, 0.0, 1.0, 1.0)',
        style({ transform: 'scale(0)', opacity: 0 })
      ),
    ]),
  ]),
  
];

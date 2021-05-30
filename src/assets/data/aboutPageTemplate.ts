/* eslint-disable max-len */
const aboutPageTemplate = [
  {
    el: 'section',
    classNames: 'about',
    parent: 'main > .wrapper',
    child: [
      {
        el: 'h2',
        classNames: 'about__caption',
        text: 'How to play?',
      },
      {
        el: 'div',
        classNames: 'about__item',
        child: [
          {
            el: 'div',
            classNames: 'about__description',
            child: [
              {
                el: 'p',
                classNames: 'about__number',
                text: '1',
              },
              {
                el: 'p',
                classNames: 'about__info',
                text: 'Register new player in game',
              },
            ],
          },
          {
            el: 'div',
            classNames: 'about__example about__example-reg',
          },
        ],
      },
      {
        el: 'div',
        classNames: 'about__item',
        child: [
          {
            el: 'div',
            classNames: 'about__description',
            child: [
              {
                el: 'p',
                classNames: 'about__number',
                text: '2',
              },
              {
                el: 'p',
                classNames: 'about__info',
                text: 'Configure your game settings',
              },
            ],
          },
          {
            el: 'div',
            classNames: 'about__example about__example-settings',
          },
        ],
      },
      {
        el: 'div',
        classNames: 'about__item',
        child: [
          {
            el: 'div',
            classNames: 'about__description',
            child: [
              {
                el: 'p',
                classNames: 'about__number',
                text: '3',
              },
              {
                el: 'p',
                classNames: 'about__info',
                text: 'Start you new game! Remember card positions and match it before times up.',
              },
            ],
          },
          {
            el: 'div',
            classNames: 'about__example about__example-start',
          },
        ],
      },
    ],
  },
];

export default aboutPageTemplate;

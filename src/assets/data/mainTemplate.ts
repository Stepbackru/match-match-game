const mainTemplate = [
  {
    el: 'header',
    classNames: 'header',
    parent: 'body',
    child: [
      {
        el: 'div',
        classNames: 'wrapper',
        child: [
          {
            el: 'div',
            classNames: 'logo',
            child: [
              {
                el: 'h1',
                classNames: 'logo__caption visually-hidden',
                text: 'Match Match Game',
              },
              {
                el: 'p',
                classNames: 'logo__name logo__name-blue',
                text: 'Match',
              },
              {
                el: 'p',
                classNames: 'logo__name logo__name-white',
                text: 'Match',
              },
            ],
          },
          {
            el: 'nav',
            classNames: 'menu',
            child: [
              {
                el: 'ul',
                classNames: 'menu__list',
                child: [
                  {
                    el: 'li',
                    classNames: 'menu__item',
                    child: [
                      {
                        el: 'button',
                        classNames: 'menu__btn menu__btn-about',
                        child: [
                          {
                            el: 'div',
                            classNames: 'menu__icon menu__icon-about',
                          },
                          {
                            el: 'p',
                            classNames: 'menu__caption',
                            text: 'About Game',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    el: 'li',
                    classNames: 'menu__item',
                    child: [
                      {
                        el: 'button',
                        classNames: 'menu__btn menu__btn-score',
                        child: [
                          {
                            el: 'div',
                            classNames: 'menu__icon menu__icon-score',
                          },
                          {
                            el: 'p',
                            classNames: 'menu__caption',
                            text: 'Best Score',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    el: 'li',
                    classNames: 'menu__item',
                    child: [
                      {
                        el: 'button',
                        classNames: 'menu__btn menu__btn-settings',
                        child: [
                          {
                            el: 'div',
                            classNames: 'menu__icon menu__icon-settings',
                          },
                          {
                            el: 'p',
                            classNames: 'menu__caption',
                            text: 'Settings',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            el: 'article',
            classNames: 'user',
            child: [
              {
                el: 'button',
                classNames: 'user__sign user__sign-up',
                text: 'Sign Up',
              },
              {
                el: 'button',
                classNames: 'user__sign user__sign-in',
                text: 'Sign in',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default mainTemplate;

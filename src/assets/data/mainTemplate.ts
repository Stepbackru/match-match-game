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
                        el: 'a',
                        classNames: 'menu__btn menu__btn-about',
                        dataAttr: [['href', '#about']],
                        child: [
                          {
                            el: 'div',
                            classNames: 'menu__icon menu__icon-about',
                            text: '?',
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
                        el: 'a',
                        classNames: 'menu__btn menu__btn-score',
                        dataAttr: [['href', '#score']],
                        child: [
                          {
                            el: 'div',
                            classNames: 'menu__icon menu__icon-transparent',
                            child: [
                              {
                                el: 'div',
                                classNames: 'menu__icon-score',
                              },
                            ],
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
                        el: 'a',
                        classNames: 'menu__btn menu__btn-settings',
                        dataAttr: [['href', '#settings']],
                        child: [
                          {
                            el: 'div',
                            classNames: 'menu__icon',
                            child: [
                              {
                                el: 'div',
                                classNames: 'menu__icon-settings',
                              },
                            ],
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
  {
    el: 'main',
    classNames: 'main',
    parent: 'body',
    child: [
      {
        el: 'div',
        classNames: 'wrapper',
      },
    ],
  },
];

export default mainTemplate;

const registerTemplate = [
  {
    el: 'article',
    classNames: 'register',
    parent: 'body',
    child: [
      {
        el: 'h2',
        classNames: 'register__caption',
        text: 'Registration new Player',
      },
      {
        el: 'form',
        classNames: 'register__form',
        dataAttr: [['action', '#']],
        child: [
          {
            el: 'input',
            classNames: 'register__input',
            dataAttr: [
              ['type', 'text'],
              ['required', ''],
            ],
          },
          {
            el: 'input',
            classNames: 'register__input',
            dataAttr: [
              ['type', 'text'],
              ['required', ''],
            ],
          },
          {
            el: 'input',
            classNames: 'register__input',
            dataAttr: [
              ['type', 'email'],
              ['required', ''],
            ],
          },
          {
            el: 'button',
            classNames: 'register__btn register__btn-submit',
            dataAttr: [['type', 'submit']],
            text: 'Registration',
          },
        ],
      },
      {
        el: 'button',
        classNames: 'register__btn register__cancel',
        text: 'Cancel',
      },
    ],
  },
];

export default registerTemplate;

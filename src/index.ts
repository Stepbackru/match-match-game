import Main from './pages';

const main = new Main();
main.render();

window.onload = (): void => {
  main.init();
};

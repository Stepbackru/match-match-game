import aboutPage from '../../pages/about/about';

export default class Router {
  public static init(): void {
    Router.subscribe();
    Router.handleHash();
  }

  private static subscribe(): void {
    window.addEventListener('hashchange', Router.handleHash);
  }

  private static handleHash(): void {
    const hash = window.location.hash ? window.location.hash.slice(1) : '';

    Router.controller(hash);
  }

  private static controller(hash: string): void {
    switch (hash) {
      case 'about':
        aboutPage.destroy();
        aboutPage.render();
        break;

      case 'score':
        aboutPage.destroy();
        break;

      case 'settings':
        aboutPage.destroy();
        break;

      default:
        break;
    }
  }

  public static activeLinkAfterRefresh(hash: string, arr: Array<HTMLElement>): void {
    const about = arr.filter((el) => el.classList.contains('menu__btn-about'));
    const score = arr.filter((el) => el.classList.contains('menu__btn-score'));
    const settings = arr.filter((el) => el.classList.contains('menu__btn-settings'));

    arr.forEach((el) => el.classList.remove('menu__btn-active'));

    switch (hash) {
      case 'about':
        about[0].classList.add('menu__btn-active');
        break;

      case 'score':
        score[0].classList.add('menu__btn-active');
        break;

      case 'settings':
        settings[0].classList.add('menu__btn-active');
        break;

      default:
        about[0].classList.add('menu__btn-active');
        break;
    }
  }
}

import ObjInterface from '../assets/interfaces/interfaceRender';
import elem from '../assets/utils/createElement';
import mainTemplate from '../assets/data/mainTemplate';
import aboutPage from './about/about';
import register from './modals/register';
import './style.scss';

export default class Main {
  private elements: HTMLElement[] = [];

  public constructor() {
    this.changeActiveButton = this.changeActiveButton.bind(this);
  }

  public init(): void {
    this.subscribe();
  }

  public render(): void {
    this.createTemplate(mainTemplate);
    aboutPage.render();
    register.render();
  }

  private subscribe(): void {
    const menuBtns = this.elements.filter((el) => el.classList.contains('menu__btn'));
    menuBtns.forEach((el) => {
      el.addEventListener('click', this.changeActiveButton);
    });
  }

  private changeActiveButton(e: MouseEvent): void {
    const item = e.currentTarget as HTMLElement;
    const btnArr = this.elements.filter((el) => el.classList.contains('menu__btn'));

    btnArr.forEach((el) => el.classList.remove('menu__btn-active'));
    item.classList.add('menu__btn-active');
  }

  private createTemplate(arr: ObjInterface[]): void {
    arr.forEach((elems: ObjInterface) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

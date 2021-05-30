import ObjInterface from '../assets/interfaces/interfaceRender';
import elem from '../assets/utils/createElement';
import mainTemplate from '../assets/data/mainTemplate';
import aboutPage from './about/about';
import './style.scss';

export default class Main {
  private elements: HTMLElement[] = [];

  public render(): void {
    this.createTemplate(mainTemplate);
    aboutPage.render();
    console.log(this.elements);
  }

  // subscribe() {

  // }

  private createTemplate(arr: ObjInterface[]): void {
    arr.forEach((elems: ObjInterface) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

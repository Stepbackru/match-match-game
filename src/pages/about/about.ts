import ObjInterface from '../../assets/interfaces/interfaceRender';
import elem from '../../assets/utils/createElement';
import aboutPageTemplate from '../../assets/data/aboutPageTemplate';
import './style.scss';

class AboutPage {
  private elements: HTMLElement[] = [];

  public render(): void {
    this.createTemplate(aboutPageTemplate);
    console.log(this.elements);
  }

  private createTemplate(arr: ObjInterface[]): void {
    arr.forEach((elems: ObjInterface) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

const aboutPage = new AboutPage();

export default aboutPage;

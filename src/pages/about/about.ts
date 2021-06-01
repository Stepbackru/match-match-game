import PageTemplate from '../../assets/interfaces/pageTemplate';
import ObjInterface from '../../assets/interfaces/interfaceRender';
import elem from '../../assets/utils/createElement';
import aboutPageTemplate from '../../assets/data/aboutPageTemplate';
import './style.scss';

class AboutPage implements PageTemplate {
  private elements: HTMLElement[] = [];

  public render(): void {
    this.createTemplate(aboutPageTemplate);
  }

  public destroy(): void {
    this.elements.forEach((el: HTMLElement) => {
      el.remove();
    });
    this.elements = [];
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

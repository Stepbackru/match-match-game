import ObjInterface from '../../assets/interfaces/interfaceRender';
import pageTemplate from '../../assets/interfaces/pageTemplate';
import elem from '../../assets/utils/createElement';
import registerTemplate from '../../assets/data/registerTemplate';

class RegisterModal implements pageTemplate {
  private elements: HTMLElement[] = [];

  public render(): void {
    this.createTemplate(registerTemplate);
  }

  public destroy(): void {
    this.elements.forEach((el) => el.remove());
    this.elements = [];
  }

  // private subscribe(): void  {

  // }

  // private unsubscribe(): void  {

  // }

  private createTemplate(arr: ObjInterface[]): void {
    arr.forEach((elems: ObjInterface) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

const register = new RegisterModal();

export default register;

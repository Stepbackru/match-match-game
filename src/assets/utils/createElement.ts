import ObjInterface from '../interfaces/interfaceRender';

class CreateElement {
  public elements: HTMLElement[] = [];

  public getElements(): HTMLElement[] {
    return new Array(...this.elements);
  }

  public clearElements(): void {
    this.elements = [];
  }

  public add(args: ObjInterface): HTMLElement {
    let element: HTMLElement;

    // Create Element
    try {
      element = document.createElement(args.el);
    } catch {
      throw new Error('Unable to create HTMLElement!');
    }

    // Add classNames to element
    if (args.classNames) {
      element.classList.add(...args.classNames.split(' '));
    }

    if (args.text !== undefined) {
      element.innerText = `${args.text}`;
    }

    // Childs of element
    if (args.child && Array.isArray(args.child)) {
      args.child.forEach((child: ObjInterface) => {
        element.appendChild(this.add(child));
      });
    }

    // Parent of element (for first element)
    if (args.parent) {
      if (args.parent === 'body') {
        document.body.appendChild(element);
      } else {
        document.querySelector(`.${args.parent}`)?.appendChild(element);
      }
    }

    // data-attributes of element
    if (args.dataAttr !== undefined) {
      args.dataAttr.forEach(([attrName, attrValue]) => {
        if (attrValue === '') {
          element.setAttribute(attrName, '');
        }

        // eslint-disable-next-line max-len
        if (attrName.match(/value|id|placeholder|type|pattern|autocomplete|href|action/)) {
          element.setAttribute(attrName, attrValue);
        } else if (attrValue !== '') {
          element.dataset[attrName] = attrValue;
        }
      });
    }

    this.elements.push(element);

    return element;
  }
}

const elem = new CreateElement();

export default elem;

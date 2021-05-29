export default interface ObjInterface {
  el: string;
  classNames?: string;
  parent?: string;
  text?: string;
  dataAttr?: [string[]];
  child?: ObjInterface[];
}

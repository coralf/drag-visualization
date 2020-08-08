import { Enode, Style } from "./index";
import { v4 as uuid } from 'uuid';
import { observable } from "mobx";

export class BaseEnode implements Enode {
  parent: Enode;
  id: string;
  type: string;
  width: number;
  height: number;
  children: Enode[];
  style: Style;
  dragable: boolean;
  constructor() {
    this.id = uuid();
    this.children = [];
  }


}
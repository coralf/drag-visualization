import { BaseEnode } from './BaseEnode';
import { InodeTree, Enode } from './index';
import { observable } from 'mobx';
import { action } from 'mobx';
import { computed } from 'mobx';


export default class NodeTree implements InodeTree {

  @observable
  rootNodes: Enode;

  constructor() {
    this.rootNodes = new BaseEnode();
  }

  findById(id: string): Enode {
    throw new Error("Method not implemented.");
  }

  updateById(id: string, updateFun: (enode: Enode) => Enode): null {
    throw new Error("Method not implemented.");
  }
  getParent(id: string): Enode {
    throw new Error("Method not implemented.");
  }
  getChildren(id: string): Enode[] {
    throw new Error("Method not implemented.");
  }

  @action
  addChild(item: Enode) {
    console.log("NodeTree -> addChild -> item", item)
    if (this.rootNodes === null) {
      throw new Error("rootNodes is null");
    }
    const newNodesTree = { ...this.rootNodes };
    item.parent = newNodesTree;
    newNodesTree.children.push(item);
    this.rootNodes = newNodesTree;
  }


}
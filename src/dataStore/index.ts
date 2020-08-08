
import * as React from 'react';
import NodeTree from '../nodes/NodeTree';
import { observable } from 'mobx';
import { PlaneItem, AllTypeNodes } from './dragPlanItem';


export class GlobalData {

  // @observable
  nodeTree: NodeTree;

  @observable
  allTypeNodes: PlaneItem[];

  
  constructor() {
    this.allTypeNodes = AllTypeNodes;
    this.nodeTree = new NodeTree();
  }
}

export const Global = React.createContext<GlobalData | null>(null);





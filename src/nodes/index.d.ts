
export interface Style {
  [key: string]: any
}

export interface Enode {
  id: string;
  type: string;
  width: number;
  height: number;
  children: Enode[];
  style: Style;
  dragable: boolean;
  parent: Enode;
}

export interface InodeTree {
  rootNodes: Enode;
  findById(id: string): Enode | null;
  updateById(id: string, updateFun: (enode: Enode) => Enode): null;
  getParent(id: string): Enode;
  getChildren(id: string): Enode[];
}
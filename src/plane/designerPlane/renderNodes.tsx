import { Enode } from "../../nodes";

import * as React from 'react';
import Text from "../../witget/Text";
import TextNode from "../../witget/Text/TextNode";


export function renderText(item: Enode) {
  item.style = {
    ...item.style,
    ...{
      position: "absolute",
    }
  }
  return React.createElement(Text, { key: item.id, text: item as TextNode });
}

export function renderTree(nodesTree: Enode[]) {
  const config = {
    text: renderText
  }
  return nodesTree.map((item: Enode) => {
    if (item.children && item.children.length > 0) {
      renderTree(item.children);
    }
    const renderFun = config[item.type];
    return renderFun(item);
  });
}

export function renderNodes(nodesTree: Enode): any {
  return renderTree(nodesTree.children);
} 
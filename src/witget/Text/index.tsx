import * as React from 'react';
import TextNode from './TextNode';

export interface TextProps {
  text: TextNode
}

const Text: React.SFC<TextProps> = ({ text }) => {
  return (
    <div style={text.style}>
      <span >{text.value}</span>
    </div>
  );
}

export default Text;
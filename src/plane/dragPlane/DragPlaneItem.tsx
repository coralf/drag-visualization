import * as React from 'react';
import { PlaneItem } from './../../dataStore/dragPlanItem';
import { useDrag } from 'react-dnd';
import TextNode from '../../witget/Text/TextNode';

export interface DragPlaneItemProps {
  item: PlaneItem;
}

const DragPlaneItem: React.SFC<DragPlaneItemProps> = ({ item }) => {


  const textNode = new TextNode();
  const [{ isDragging }, drag] = useDrag({
    item: textNode,
    end: (item, monitor) => {
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })


  return (
    <div className="plane-item" >
      <div ref={drag}>
        <img className="plane-item-img" src={item.img} alt="" width="15" height="15" />
        <span className="plane-item-text">{item.text}</span>
      </div>
    </div>
  );
}

export default DragPlaneItem;
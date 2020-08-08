import * as React from 'react';
import { useDrop } from 'react-dnd';
import { observer } from 'mobx-react';
import { GlobalData, Global } from '../../dataStore/';
import { EnodeType } from '../../nodes/ENodeConfig';
import { Enode } from '../../nodes';
import { renderNodes } from './renderNodes';
import { pxToRem } from '../../utils';


export interface DesignerPlaneProps {


}

const DesignerPlane: React.SFC<DesignerPlaneProps> = (props) => {


  const { nodeTree } = React.useContext(Global) as GlobalData;



  const [, dropRef] = useDrop({
    accept: [EnodeType.Text],
    drop: (item: Enode, monitor) => {
      const delta = monitor.getClientOffset();
      if (delta === null) return;
      const panelEle = document.getElementById('designerPlane') as HTMLElement;
      const left = pxToRem(delta.x - panelEle.offsetLeft);
      const top = pxToRem(delta.y - panelEle.offsetTop);
      item.style = {
        left: left + 'rem',
        top: top + 'rem'
      }
      nodeTree.addChild(item);
    },
    collect: (monitor) => {

    }
  });
  return (
    <div id="designerPlane" className='designer-plane plane-basic-color' ref={dropRef}>
      {nodeTree && nodeTree.rootNodes && renderNodes(nodeTree.rootNodes)}
    </div>
  );
}

export default observer(DesignerPlane);


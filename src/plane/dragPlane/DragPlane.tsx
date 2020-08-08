import * as React from 'react';

import '../../css/DragPlane.css';
import PlaneList from './DragPlanePlaneList';
import DragPlaneTitle from './DragPlaneTitle';

export interface DragPlaneProps {

}

const DragPlane: React.SFC<DragPlaneProps> = () => {
  return (
    <div className='drag-plane plane-basic-color'>
      <DragPlaneTitle />
      <PlaneList/>
    </div>
  );
}

export default DragPlane;
import * as React from 'react';
import Config from '../../config/index';

export interface DragPlaneTitleProps {

}

const DragPlaneTitle: React.SFC<DragPlaneTitleProps> = () => {
  return (
    <div className="drag-plane-title">
      {Config.dragPlaneTitle}
    </div>
  );
}

export default DragPlaneTitle;
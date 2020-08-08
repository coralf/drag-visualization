import * as React from 'react';
import '../css/DesignerLayout.css';

export interface DesignerLayoutProps {

}

const DesignerLayout: React.SFC<DesignerLayoutProps> = (props) => {
  return (
    <div className="designer-layout">
      {props.children}
    </div>
  );
}

export default DesignerLayout;
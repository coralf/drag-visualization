import * as React from 'react';
import { Global, GlobalData } from '../../dataStore';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import DragPlaneItem from './DragPlaneItem';


export interface PlaneListProps {

}

const PlaneList: React.SFC<PlaneListProps> = (props) => {
  
  const { allTypeNodes } = React.useContext(Global) as GlobalData;


  return (
    <div className="plane-list">
      {
        allTypeNodes.map((item, index) => (
          <DragPlaneItem key={item.type} item={item}></DragPlaneItem>
        ))
      }
    </div>
  );
}

export default PlaneList;
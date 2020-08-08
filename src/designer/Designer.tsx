import * as React from 'react';
import DesignerLayout from './DesignerLayout';
import DragPlane from '../plane/dragPlane/DragPlane';
import DesignerPlane from '../plane/designerPlane/DesignerPlane';
import PropertiesPlane from '../plane/propertiesPlane/PropertiesPlane';
import { Global, GlobalData } from '../dataStore';
import { observe } from 'mobx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'


export interface DesignerProps {

}

const Designer: React.SFC<DesignerProps> = () => {


  return (
    <Global.Provider value={new GlobalData()}>
      <DndProvider backend={HTML5Backend}>
        <DesignerLayout>
          <DragPlane />
          <DesignerPlane />
          <PropertiesPlane />
        </DesignerLayout>
      </DndProvider>
    </Global.Provider>
  );
}

export default Designer;
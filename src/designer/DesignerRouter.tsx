import * as React from 'react';
import Preview from '../preview/Preview';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import PreviewLayout from '../preview/PreviewLayout';
import { observable, action } from "mobx";
import { observer, Provider } from "mobx-react";
import Designer from './Designer';
export interface VisDesignerProps {

}

const VisDesigner: React.SFC<VisDesignerProps> = () => {

  return (
    <HashRouter>
      <Switch>
        <Route path='/'>
          <Designer />
        </Route>
        <Route path='/preview'>
          <Preview />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default VisDesigner;
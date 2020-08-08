import * as React from 'react';

import PreviewLayout from './PreviewLayout';
import { Route } from 'react-router';

export interface PreviewProps {

}

const Preview: React.SFC<PreviewProps> = (props) => {


  return (
    <Route path='/preview'>
      <PreviewLayout></PreviewLayout>
    </Route>
  );
}

export default Preview;
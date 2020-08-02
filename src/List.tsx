import * as React from 'react';
import { Context } from './App';

export interface ListProps {
}

const List: React.SFC<ListProps> = (props) => {


  const context: any = React.useContext(Context);


  return (<div>
    <button onClick={() => {
      window.open('/#/preview');
    }}>预览</button>
    list:{context.age}
  </div>);
}

export default List;
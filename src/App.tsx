import * as React from 'react';
import Select from './components/Select';
import List from './List';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export interface AppProps {

}

export const Context = React.createContext({});
const user = { name: 'zhangsan' };

export const App: React.SFC<AppProps> = () => {
  const [state, setState] = React.useState<any>(user);



  React.useEffect(() => {

    setInterval(() => {
      const newState = { ...state };
      newState.age = (new Date().getTime() / 1000).toFixed(0);
      setState({ ...newState });
    }, 1000);

  }, []);

  return (
    <Context.Provider value={state}>
      <Router>
        <Switch>
          <Route path="/preview">
            <Select></Select>
          </Route>
          <Route path="/" >
            <List></List>
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}
export default App;
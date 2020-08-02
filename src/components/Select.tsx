import * as React from 'react';
import { Context } from '../App';

export interface SelectProps {
}

const Select: React.SFC<SelectProps> = (props) => {


  function test(params: string) {

    return new Promise((resolve, reject) => {
      resolve(params);
    })

  }

  React.useEffect(() => {
    test('xxx').then((res) => {
      console.log(res);
    })
  }, [])


  const context: any = React.useContext(Context);

  return (<div>



    select:{context.age}

  </div>);
}

export default Select;
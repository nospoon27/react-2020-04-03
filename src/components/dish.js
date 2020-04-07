import React from 'react';
import { Button } from 'antd';
import counter from '../hocs/counter';

function Dish(props) {
  const { count, decrement, increment } = props;

  return (
    <div>
      <p>{props.dish.name}</p>
      <p>{props.dish.price}</p>
      {count}
      <Button type="primary" onClick={decrement}>
        -
      </Button>
      <Button type="primary" onClick={increment}>
        +
      </Button>
    </div>
  );
}

export default counter(Dish);

import React from 'react';
import { Button } from 'antd';
import { useAmount } from '../hooks/use-amount';

export default function Dish(props) {
  const { count, decrement, increment } = useAmount();

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

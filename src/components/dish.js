import React from 'react';

export default function Dish(props) {
  return (
    <div>
      <p>{props.dish.name}</p>
      <p>{props.dish.price}</p>
    </div>
  );
}

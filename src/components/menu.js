import React from 'react';
import Dish from './Dish';

export default function Menu(props) {
  return (
    <div>
      {props.restaurant.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

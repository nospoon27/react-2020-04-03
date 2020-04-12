import React from 'react';
import Reviews from './Reviews';
import Menu from './Menu';
import AverageRate from './AverageRate';

const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <AverageRate reviews={restaurant.reviews} />
      Отзывы
      <Reviews reviews={restaurant.reviews} />
      Меню
      <Menu restaurant={restaurant} />
    </div>
  );
};

export default Restaurant;

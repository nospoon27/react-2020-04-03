import React, { useState, useMemo } from 'react';
import RestaurantsNavigation from './RestaurantsNavigation';
import Menu from './Menu';
import Restaurant from './Restaurant';

const Restaurants = props => {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  );

  const activeRestaurant = useMemo(
    () => findRestaurant(props.restaurants, activeRestaurantId),
    [props.restaurants, activeRestaurantId]
  );

  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={id => setActiveRestaurant(id)}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

const findRestaurant = (restaurants, activeId) => {
  return restaurants.find(r => r.id === activeId);
};

export default Restaurants;

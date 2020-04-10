import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dish from '../dish';

class Dishes extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  render() {
    const { menu } = this.props;
    return (
      <div>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    );
  }
}

export default Dishes;

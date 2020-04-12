import React from 'react';
import { Rate } from 'antd';

const Review = ({ review }) => {
  return (
    <div>
      <h6>{review.user}</h6>
      <Rate disabled defaultValue={review.rating} />
      <div>{review.text}</div>
    </div>
  );
};

export default Review;

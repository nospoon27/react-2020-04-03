import React from 'react';
import Review from './Review';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map(r => (
        <Review review={r} />
      ))}
    </div>
  );
};

export default Reviews;

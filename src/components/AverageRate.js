import React, { useMemo } from 'react';
import { Rate } from 'antd';

const AverageRate = ({ reviews }) => {
  const rowRating = useMemo(
    () => reviews.reduce((sum, { rating }) => sum + rating, 0) / reviews.length,
    [reviews]
  );
  return (
    <div>
      <Rate value={rowRating} />
    </div>
  );
};

export default AverageRate;

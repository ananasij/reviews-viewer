import React from 'react';
import { Review } from './Review';
import { IReview } from '../core/models/review.model';

export const ReviewList: React.FC<{ reviews: IReview[] }> = ({ reviews }) => (
  <div>
    {reviews.map((review: IReview) => (
      <Review {...review} />
    ))}
  </div>
);

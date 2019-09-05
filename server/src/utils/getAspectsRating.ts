import { IReview } from '../models/review.model';
import { IRatingCategory } from '../models/rating.model';
import { roundTo } from './roundTo';

export const getAspectsRating = (reviews: IReview[]): IRatingCategory => {
  const counters: IRatingCategory = {};
  const sums: IRatingCategory = {};
  const averages: IRatingCategory = {};

  for (const review of reviews) {
    for (const key of Object.keys(review.ratings.aspects)) {
      if (review.ratings.aspects[key] > 0) {
        if (sums.hasOwnProperty(key)) {
          sums[key] += review.ratings.aspects[key];
          counters[key] += 1;
        } else {
          sums[key] = review.ratings.aspects[key];
          counters[key] = 1;
        }
      }
    }
  }

  for (const key of Object.keys(sums)) {
    averages[key] = roundTo(sums[key] / counters[key], 0);
  }

  return averages;
};

// TODO: merge this two methods into one to avoid code duplication
import { IReview } from '../models/review.model';
import { IRatingCategory } from '../models/rating.model';
import { roundTo } from './roundTo';

export const getTraveledWithRatings = (reviews: IReview[]): IRatingCategory => {
  const counters: IRatingCategory = {};
  const sums: IRatingCategory = {};
  const averages: IRatingCategory = {};

  for (const review of reviews) {
    if (sums.hasOwnProperty(review.traveledWith)) {
      sums[review.traveledWith] += review.ratings.general.general;
      counters[review.traveledWith] += 1;
    } else {
      sums[review.traveledWith] = review.ratings.general.general;
      counters[review.traveledWith] = 1;
    }
  }

  for (const key of Object.keys(sums)) {
    averages[key] = roundTo(sums[key] / counters[key], 0);
  }

  return averages;
};

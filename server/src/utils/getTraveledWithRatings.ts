import { IReview } from '../models/review.model';
import { IRatingCategory } from '../models/rating.model';
import { roundTo } from './roundTo';
import { getWeightByYear } from './getWeight';

export const getTraveledWithRatings = (reviews: IReview[], currentYear: number): IRatingCategory => {
  if (!reviews || !reviews.length) {
    return {};
  }

  const sums: IRatingCategory = {};
  const weightSums: IRatingCategory = {};
  const averages: IRatingCategory = {};

  for (const review of reviews) {
    const reviewYear = new Date(review.entryDate).getFullYear();
    const reviewWeight = getWeightByYear(reviewYear, currentYear);

    if (!!reviewWeight && reviewWeight > 0) {
      const key = review.traveledWith;

      if (!sums.hasOwnProperty(key)) {
        sums[key] = 0;
        weightSums[key] = 0;
      }

      sums[key] += review.ratings.general.general * reviewWeight;
      weightSums[key] += reviewWeight;
    }
  }

  for (const key of Object.keys(sums)) {
    averages[key] = roundTo(sums[key] / weightSums[key], 0);
  }

  return averages;
};

import { IReview } from '../models/review.model';
import { roundTo } from './roundTo';
import { getWeightByYear } from './getWeight';

export const getGeneralRating = (reviews: IReview[], currentYear: number): number => {
  if (!reviews || !reviews.length) {
    return 0;
  }

  let sum = 0;
  let weightsSum = 0;

  for (const review of reviews) {
    const reviewYear = new Date(review.entryDate).getFullYear();
    const reviewWeight = getWeightByYear(reviewYear, currentYear);

    if (!!reviewWeight && reviewWeight > 0) {
      sum += review.ratings.general.general * reviewWeight;
      weightsSum += reviewWeight;
    }
  }

  return roundTo(sum / weightsSum, 0);
};

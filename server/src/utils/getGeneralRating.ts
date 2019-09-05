import { IReview } from '../models/review.model';
import { roundTo } from './roundTo';

export const getGeneralRating = (reviews: IReview[]): number => {
  const sum: number = reviews.reduce(
    (sum: number, next: IReview) => sum + next.ratings.general.general,
    0
  );

  return roundTo(sum / reviews.length, 0);
};

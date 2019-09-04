import { Context } from 'koa';
import { IRatingsResponse, IRatingCategory } from '../models/rating.model';
import { IReview } from '../models/review.model';
import { reviewsData } from '../server';

export const ratignsRoute = async (ctx: Context, next: Function) => {
  ctx.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body = getRatings();
};

export function getRatings(): IRatingsResponse {
  return {
    data: {
      general: {
        general: getGeneralRating(reviewsData)
      },
      aspects: getAspectsRating(reviewsData),
      traveledWith: {
        family: 6,
        friends: 8,
        other: 10,
        couple: 10,
        single: 9
      }
    }
  };
}

const getGeneralRating = (reviews: IReview[]): number => {
  const sum: number = reviews.reduce(
    (sum: number, next: IReview) => sum + next.ratings.general.general,
    0
  );

  return roundTo(sum / reviews.length, 0);
};

const getAspectsRating = (reviews: IReview[]): IRatingCategory => {
  const aspectsRatingsCounter: IRatingCategory = {};
  const aspectsRatingsSum: IRatingCategory = {};
  const aspectsRatingsAverage: IRatingCategory = {};

  for (const review of reviews) {
    for (const key of Object.keys(review.ratings.aspects)) {
      if (review.ratings.aspects[key] > 0) {
        if (aspectsRatingsSum.hasOwnProperty(key)) {
          aspectsRatingsSum[key] += review.ratings.aspects[key];
          aspectsRatingsCounter[key] += 1;
        } else {
          aspectsRatingsSum[key] = review.ratings.aspects[key];
          aspectsRatingsCounter[key] = 1;
        }
      }
    }
  }

  for (const key of Object.keys(aspectsRatingsSum)) {
    aspectsRatingsAverage[key] = roundTo(
      aspectsRatingsSum[key] / aspectsRatingsCounter[key],
      0
    );
  }

  return aspectsRatingsAverage;
};

const roundTo = (number: number, decimals = 2): number =>
  parseFloat(number.toFixed(2));

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
      traveledWith: getTravelWithRatings(reviewsData)
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

// TODO: merge this two methods into one to avoid code duplication
const getTravelWithRatings = (reviews: IReview[]): IRatingCategory => {
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

const roundTo = (number: number, decimals = 0): number =>
  parseFloat(number.toFixed(decimals));

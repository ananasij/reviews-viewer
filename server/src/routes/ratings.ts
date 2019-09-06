import { Context } from 'koa';
import { IRatingsResponse } from '../models/rating.model';
import { reviewsData } from '../server';
import { getGeneralRating } from '../utils/getGeneralRating';
import { getAspectsRating } from '../utils/getAspectsRating';
import { getTraveledWithRatings } from '../utils/getTraveledWithRatings';

export const ratignsRoute = async (ctx: Context, next: Function) => {
  ctx.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body = getRatings();
};

export function getRatings(): IRatingsResponse {
  const currentYear: number = new Date().getFullYear();

  return {
    data: {
      general: {
        general: getGeneralRating(reviewsData, currentYear)
      },
      aspects: getAspectsRating(reviewsData, currentYear),
      traveledWith: getTraveledWithRatings(reviewsData, currentYear)
    }
  };
}

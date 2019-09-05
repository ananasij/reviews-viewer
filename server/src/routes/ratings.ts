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
  return {
    data: {
      general: {
        general: getGeneralRating(reviewsData)
      },
      aspects: getAspectsRating(reviewsData),
      traveledWith: getTraveledWithRatings(reviewsData)
    }
  };
}







import { Context } from 'koa';
import { reviewsData } from '../server';
import { IReviewsResponse } from 'src/models/review.model';

export const reviewsRoute = async (ctx: Context, next: Function) => {
  ctx.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body = getReviews();
};

const getReviews = (limit = 10, offset = 0): IReviewsResponse => {
  return {
    data: reviewsData.slice(offset * limit, (offset + 1) * limit),
    meta: {
      pagination: {
        offset,
        limit,
        total: reviewsData.length
      }
    }
  };
};

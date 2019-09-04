import { Context } from 'koa';
import { reviewsData } from '../server';
import { IReviewsResponse } from '../models/review.model';

export const reviewsRoute = async (ctx: Context, next: Function) => {
  ctx.status = 200;
  ctx.set('Content-Type', 'application/json');
  ctx.body = getReviews(ctx.query.traveledWith, ctx.query.sortBy);
};

const getReviews = (
  traveledWith = 'ALL',
  sortBy: SortBy = 'entryDate',
  limit = 10,
  offset = 0
): IReviewsResponse => {
  const reviewsList =
    traveledWith === 'ALL'
      ? reviewsData.slice()
      : reviewsData.filter(review => review.traveledWith === traveledWith);

  reviewsList.sort((a, b) => (b[sortBy] - a[sortBy]));

  return {
    data: reviewsList.slice(offset * limit, (offset + 1) * limit),
    meta: {
      pagination: {
        offset,
        limit,
        total: reviewsList.length
      }
    }
  };
};

type SortBy = 'entryDate' | 'travelDate';

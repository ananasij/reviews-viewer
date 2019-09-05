import { IReview, IReviewsResponse } from '../models/review.model';
import { endpoints } from './endpoints';
import { PAGE_SIZE } from '../constants';

export async function getReviewsFromApi(traveledWith: string, sortBy: string, page: number = 1) {
  const url = new URL(endpoints.reviews);
  url.searchParams.append('traveledWith', traveledWith);
  url.searchParams.append('sortBy', sortBy);
  url.searchParams.append('offset', String((page - 1) * PAGE_SIZE));
  url.searchParams.append('limit', String(PAGE_SIZE));

  const response: IReviewsResponse = await (await fetch(String(url))).json();

  return {
    reviews: parseReviews(response),
    total: response.meta.pagination.total
  };
}

function parseReviews(response: IReviewsResponse): IReview[] {
  if (!response || !response.data) {
    throw new Error('[Reviews] Invalid response from server.');
  }

  return response.data;
}

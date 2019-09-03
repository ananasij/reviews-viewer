import { IReview, IReviewsResponse } from '../models/review.model';
import { endpoints } from './endpoints';

export async function getReviewsFromApi(): Promise<IReview[]> {
  const response = await fetch(endpoints.reviews);

  return parseReviews(await response.json());
}

function parseReviews(response: IReviewsResponse): IReview[] {
  if (!response || !response.data) {
    throw new Error('[Reviews] Invalid response from server.');
  }

  return response.data;
}

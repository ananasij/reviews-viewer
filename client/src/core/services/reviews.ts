import { IReview, IReviewsResponse } from '../models/review.model';
import { endpoints } from './endpoints';

export async function getReviewsFromApi(
  traveledWith: string,
  sortBy: string
): Promise<IReview[]> {
  const url = new URL(endpoints.reviews);
  url.searchParams.append('traveledWith', traveledWith);
  url.searchParams.append('sortBy', sortBy);

  const response = await fetch(String(url));

  return parseReviews(await response.json());
}

function parseReviews(response: IReviewsResponse): IReview[] {
  if (!response || !response.data) {
    throw new Error('[Reviews] Invalid response from server.');
  }

  return response.data;
}

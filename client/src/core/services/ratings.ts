import { IRatings, IRatingsResponse } from '../models/rating.model';
import { endpoints } from './endpoints';

export async function getRatingsFromApi(): Promise<IRatings> {
  const response = await fetch(endpoints.ratings);

  return parseRatings(await response.json());
}

function parseRatings(response: IRatingsResponse): IRatings {
  if (!response || !response.data) {
    throw new Error('[Ratings] Invalid response from server.');
  }

  return response.data;
}

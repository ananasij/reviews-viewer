import { IRatings } from './rating.model';

export interface IReview {
  parents: {
    id: string;
  }[];
  id: string;
  traveledWith: TraveledWith;
  entryDate: number;
  travelDate: number;
  ratings: IRatings;
  titles: ITranslatedText;
  texts: ITranslatedText;
  user: string;
  locale: Locales;
}

interface Pagination {
  limit: number;
  offset: number;
  total: number;
}

export interface IReviewsResponse {
  data: IReview[];
  meta: {
    pagination: Pagination,
  };
}

export interface ITranslatedText {
  [key: string]: string;
}

export enum Locales {
  'nl' = 'nl'
}

export enum TraveledWith {
  FAMILY = 'FAMILY',
  FRIENDS = 'FRIENDS',
  OTHER = 'OTHER',
  COUPLE = 'COUPLE',
  SINGLE = 'SINGLE'
}

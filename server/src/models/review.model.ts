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

export interface IReviewsResponse {
  data: IReview[];
  meta: {
    pagination: {
      offset: number;
      limit: number;
      total: number;
    };
  };
}

export interface ITranslatedText {
  [key: string]: string;
}

export enum Locales {
  'nl' = 'nl'
}

export enum TraveledWith {
  'FAMILY' = 'FAMILY',
  'FRIENDS' = 'FRIENDS',
  'OTHER' = 'OTHER',
  'COUPLE' = 'COUPLE',
  'SINGLE' = 'SINGLE'
}

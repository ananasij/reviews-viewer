import { Ratings } from './rating.model';

export interface IReview {
  parents: {
    id: string;
  }[];
  id: string;
  traveledWith: TraveledWith;
  entryDate: number;
  travelDate: number;
  ratings: Ratings;
  titles: ITranslatedText;
  texts: ITranslatedText;
  user: string;
  locale: Locales;
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

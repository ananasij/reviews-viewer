export interface Ratings {
  general: RatingCategory;
  aspects: RatingCategory;
  traveledWith?: RatingCategory;
}

export interface RatingCategory {
    [key: string]: number;
}
export interface IRatings {
  general: IRatingCategory;
  aspects: IRatingCategory;
}

export interface IAverageRatings extends IRatings {
  traveledWith: IRatingCategory;
}

export interface IRatingCategory {
  [key: string]: number;
}

export interface IRatingsResponse {
  data: IAverageRatings;
}

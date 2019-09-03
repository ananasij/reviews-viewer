export interface IRatings {
  general: IRatingCategory;
  aspects: IRatingCategory;
  traveledWith?: IRatingCategory;
}

export interface IRatingCategory {
  [key: string]: number;
}

export interface IRatingsResponse {
  data: IRatings;
}

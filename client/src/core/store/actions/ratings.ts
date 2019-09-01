import { IRatings } from '../../models/rating.model';

export const actionTypes = {
  GET_RATINGS: 'GET_RATINGS',
  GET_RATINGS_SUCCESS: 'GET_RATINGS_SUCCESS',
  GET_RATINGS_ERROR: 'GET_RATINGS_ERROR'
};

// export const getRatings = () => ({
//     type: actionTypes.GET_RATINGS
// });

export const getRatings = () => getRatingsSuccess(dummyRatings);

export const getRatingsSuccess = (ratings: IRatings) => ({
    type: actionTypes.GET_RATINGS_SUCCESS,
    data: ratings
});

const dummyRatings: IRatings = {
  general: {
    general: 9
  },
  aspects: {
    location: 7,
    service: 0,
    priceQuality: 6,
    food: 0,
    room: 0,
    childFriendly: 8,
    interior: 0,
    size: 0,
    activities: 0,
    restaurants: 0,
    sanitaryState: 0,
    accessibility: 0,
    nightlife: 0,
    culture: 0,
    surrounding: 0,
    atmosphere: 0,
    noviceSkiArea: 0,
    advancedSkiArea: 0,
    apresSki: 0,
    beach: 0,
    entertainment: 0,
    environmental: 0,
    pool: 0,
    terrace: 0
  },
  traveledWith: {
    family: 6,
    friends: 8,
    other: 10,
    couple: 10,
    single: 9
  }
};
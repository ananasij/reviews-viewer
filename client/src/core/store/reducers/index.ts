import { combineReducers } from 'redux';
import { ratings, IRatingsState } from './ratings';
import { reviews, IReviewsState } from './reviews';

export interface IState {
    ratings: IRatingsState;
    reviews: IReviewsState;
}
export const rootReducer = combineReducers({
  ratings,
  reviews
});

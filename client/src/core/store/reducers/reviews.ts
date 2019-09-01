import { Reducer, AnyAction } from 'redux';
import { actionTypes } from '../actions/reviews';
import { IReview } from '../../models/review.model';

export interface IReviewsState {
  loading: boolean;
  error: any; // TODO: figure out error types
  data?: IReview[];
}

const initialState: IReviewsState = {
  loading: false,
  error: null,
  data: undefined
};

export const reviews: Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.GET_REVIEWS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data
      };
    case actionTypes.GET_REVIEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

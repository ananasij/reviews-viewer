import { Reducer } from 'redux';
import { ActionTypes, ReviewsActions } from '../actions/reviews';
import { IReview } from '../../models/review.model';

export interface IReviewsState {
  loading: boolean;
  error?: string;
  data?: IReview[];
}

const initialState: IReviewsState = {
  loading: false,
  error: undefined,
  data: undefined
};

export const reviews: Reducer<IReviewsState, ReviewsActions> = (
  state = initialState,
  action: ReviewsActions
) => {
  switch (action.type) {
    case ActionTypes.GET_REVIEWS:
      return {
        ...state,
        loading: true,
        error: undefined
      };
    case ActionTypes.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        data: action.payload.reviews
      };
    case ActionTypes.GET_REVIEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

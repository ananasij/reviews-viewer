import { Reducer } from 'redux';
import { IRatings } from '../../models/rating.model';
import { ActionTypes, RatingsActions } from '../actions/ratings';

export interface IRatingsState {
  loading: boolean;
  error?: string;
  data?: IRatings;
}

const initialState: IRatingsState = {
  loading: false,
  error: undefined,
  data: undefined
};

export const ratings: Reducer = (state = initialState, action: RatingsActions) => {
  switch (action.type) {
    case ActionTypes.GET_RATINGS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ActionTypes.GET_RATINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.ratings
      };
    case ActionTypes.GET_RATINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

import { Reducer, AnyAction } from 'redux';
import { IRatings } from '../../models/rating.model';
import { actionTypes } from '../actions/ratings';

export interface IRatingsState {
  loading: boolean;
  error: any; // TODO: figure out error types
  data?: IRatings;
}

const initialState: IRatingsState = {
  loading: false,
  error: null,
  data: undefined
};

export const ratings: Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.GET_RATINGS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.GET_RATINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data
      };
    case actionTypes.GET_RATINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

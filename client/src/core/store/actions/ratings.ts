import { Action } from 'redux';
import { IRatings } from '../../models/rating.model';

export enum ActionTypes {
  GET_RATINGS = 'GET_RATINGS',
  GET_RATINGS_SUCCESS = 'GET_RATINGS_SUCCESS',
  GET_RATINGS_ERROR = 'GET_RATINGS_ERROR'
}

export interface GetRatingsAction extends Action {
  type: ActionTypes.GET_RATINGS;
}

export interface GetRatingsSuccessAction extends Action {
  type: ActionTypes.GET_RATINGS_SUCCESS;
  payload: {
    ratings: IRatings;
  };
}

export interface GetRatingsErrorAction extends Action {
  type: ActionTypes.GET_RATINGS_ERROR;
  error: string;
}

export const getRatings = (): GetRatingsAction => ({
  type: ActionTypes.GET_RATINGS
});

export const getRatingsSuccess = (
  ratings: IRatings
): GetRatingsSuccessAction => ({
  type: ActionTypes.GET_RATINGS_SUCCESS,
  payload: { ratings }
});

export const getRatingsError = (
  error: string
): GetRatingsErrorAction => ({
  type: ActionTypes.GET_RATINGS_ERROR,
  error
});

export type RatingsActions =
  | GetRatingsAction
  | GetRatingsSuccessAction
  | GetRatingsErrorAction;

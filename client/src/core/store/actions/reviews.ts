import { IReview } from '../../models/review.model';
import { Action } from 'redux';

export enum ActionTypes {
  GET_REVIEWS = 'GET_REVIEWS',
  GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS',
  GET_REVIEWS_ERROR = 'GET_REVIEWS_ERROR'
}

export interface GetReviewsAction extends Action {
  type: ActionTypes.GET_REVIEWS;
}

export interface GetReviewsSuccessAction extends Action {
  type: ActionTypes.GET_REVIEWS_SUCCESS;
  payload: {
    reviews: IReview[];
  };
}

export interface GetReviewsErrorAction extends Action {
  type: ActionTypes.GET_REVIEWS_ERROR;
  error: string;
}

export const getReviews = (): GetReviewsAction => ({
  type: ActionTypes.GET_REVIEWS
});

export const getReviewsSuccess = (
  reviews: IReview[]
): GetReviewsSuccessAction => ({
  type: ActionTypes.GET_REVIEWS_SUCCESS,
  payload: { reviews }
});

export const getReviewsError = (
  error: string
): GetReviewsErrorAction => ({
  type: ActionTypes.GET_REVIEWS_ERROR,
  error
});

export type ReviewsActions =
  | GetReviewsAction
  | GetReviewsSuccessAction
  | GetReviewsErrorAction;

import { IReview } from '../../models/review.model';
import { Action } from 'redux';

export enum ActionTypes {
  GET_REVIEWS = 'GET_REVIEWS',
  GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS',
  GET_REVIEWS_ERROR = 'GET_REVIEWS_ERROR'
}

export interface GetReviewsAction extends Action {
  type: ActionTypes.GET_REVIEWS;
  payload: { traveledWith: string; sortBy: string, page: number };
}

export interface GetReviewsSuccessAction extends Action {
  type: ActionTypes.GET_REVIEWS_SUCCESS;
  payload: {
    reviews: IReview[];
    total: number;
  };
}

export interface GetReviewsErrorAction extends Action {
  type: ActionTypes.GET_REVIEWS_ERROR;
  error: string;
}

export const getReviews = (
  traveledWith: string,
  sortBy: string,
  page: number,
): GetReviewsAction => ({
  type: ActionTypes.GET_REVIEWS,
  payload: { traveledWith, sortBy, page }
});

export const getReviewsSuccess = (
  reviews: IReview[],
  total: number
): GetReviewsSuccessAction => ({
  type: ActionTypes.GET_REVIEWS_SUCCESS,
  payload: { reviews, total }
});

export const getReviewsError = (error: string): GetReviewsErrorAction => ({
  type: ActionTypes.GET_REVIEWS_ERROR,
  error
});

export type ReviewsActions =
  | GetReviewsAction
  | GetReviewsSuccessAction
  | GetReviewsErrorAction;

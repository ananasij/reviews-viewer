import { combineEpics, ofType } from 'redux-observable';
import { Observable, of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import {
  ActionTypes,
  getReviewsSuccess,
  getReviewsError,
  GetReviewsAction
} from '../actions/reviews';
import { getReviewsFromApi } from '../../services/reviews';

export const getReviewsEpic = (action$: Observable<GetReviewsAction>) =>
  action$.pipe(
    ofType(ActionTypes.GET_REVIEWS),
    switchMap((action: GetReviewsAction) =>
      from(
        getReviewsFromApi(
          action.payload.traveledWith,
          action.payload.sortBy,
          action.payload.page,
        )
      ).pipe(
        map(({ reviews, total }) => getReviewsSuccess(reviews, total)),
        catchError(error => of(getReviewsError(error)))
      )
    )
  );

export default combineEpics(getReviewsEpic);

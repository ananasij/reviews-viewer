import { combineEpics, ofType } from 'redux-observable';
import { Observable, of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import {
  ReviewsActions,
  ActionTypes,
  getReviewsSuccess,
  getReviewsError
} from '../actions/reviews';
import { getReviewsFromApi } from '../../services/reviews';

export const getReviewsEpic = (action$: Observable<ReviewsActions>) =>
  action$.pipe(
    ofType(ActionTypes.GET_REVIEWS),
    switchMap(() =>
      from(getReviewsFromApi()).pipe(
        map(reviews => getReviewsSuccess(reviews)),
        catchError(error => of(getReviewsError(error)))
      )
    )
  );

export default combineEpics(getReviewsEpic);

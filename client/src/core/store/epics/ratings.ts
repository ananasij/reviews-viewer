import { createEpicMiddleware, combineEpics, ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';

import {
  RatingsActions,
  ActionTypes,
  getRatingsSuccess,
  getRatingsError
} from '../actions/ratings';
import { getRatingsFromApi } from '../../services/ratings';

export const getRatingsEpic = (action$: Observable<RatingsActions>) =>
  action$.pipe(
    ofType(ActionTypes.GET_RATINGS),
    switchMap(() =>
      from(getRatingsFromApi()).pipe(
        map(ratings => getRatingsSuccess(ratings)),
        catchError(error => of(getRatingsError(error)))
      )
    )
  );

export default combineEpics(getRatingsEpic);

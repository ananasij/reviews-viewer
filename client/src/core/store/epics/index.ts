import { combineEpics } from 'redux-observable';
import ratingsEpic from './ratings';
import reviewsEpic from './reviews';

export const rootEpic = combineEpics(ratingsEpic, reviewsEpic);

import { combineEpics } from 'redux-observable';
import ratingsEpic from './ratings';

export const rootEpic = combineEpics(ratingsEpic);

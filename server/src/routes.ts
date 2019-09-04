import { Route } from './types';
import { reviewsRoute } from './routes/reviews';
import { ratignsRoute } from './routes/ratings';

export const routes: Route[] = [
  {
    path: '/ratings',
    method: 'get',
    actions: [ratignsRoute]
  },
  {
    path: '/reviews',
    method: 'get',
    actions: [reviewsRoute]
  }
];

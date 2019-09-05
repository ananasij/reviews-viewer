import React from 'react';
import { IReview, Locales } from '../core/models/review.model';
import { Card, Chip } from '@material-ui/core';
import { IRatingCategory } from '../core/models/rating.model';
import { Rating } from './Rating';
import { TRAVELED_WITH_LABELS, ASPECTS_LABELS } from '../core/constants';

export const Review: React.FC<IReview> = ({ ratings, titles, entryDate, user, travelDate, traveledWith, texts }) => (
  <Card className="review">
    <h3>
      <Chip label={ratings.general.general} color="primary" /> {titles[Locales.nl]}
    </h3>
    <div className="ratings__categories">
      {Object.keys(ratings.aspects)
        .filter(key => (ratings.aspects as IRatingCategory)[key] !== 0)
        .map(key => {
          return (
            <div className="ratings__category" key={key}>
              <Rating name={ASPECTS_LABELS[key]} value={(ratings.aspects as IRatingCategory)[key]} />
            </div>
          );
        })}
    </div>
    <p className="review__info">
      Review from {new Date(entryDate).toLocaleDateString('nl')} by {user}.
    </p>
    <p className="review__info">
      Traveled {new Date(travelDate).toLocaleDateString('nl')} {TRAVELED_WITH_LABELS[traveledWith]}.
    </p>
    <p>{texts[Locales.nl]}</p>
  </Card>
);

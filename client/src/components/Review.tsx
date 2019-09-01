import React from 'react';
import { IReview, Locales } from '../core/models/review.model';
import { Card } from '@material-ui/core';
import { RatingCategory } from '../core/models/rating.model';

export const Review: React.FC<IReview> = ({
  ratings,
  titles,
  entryDate,
  user,
  travelDate,
  traveledWith,
  texts
}) => (
  <Card className="review">
    <h4>
      {ratings.general.general}: {titles[Locales.nl]}
    </h4>
    <div>
      {Object.keys(ratings.aspects).map(key => {
        if ((ratings.aspects as RatingCategory)[key] !== 0) {
          return (
            <div className="ratings__category">
              <div>{key}:</div>
              <div>{(ratings.aspects as RatingCategory)[key]}</div>
            </div>
          );
        }
      })}
    </div>
    <p>
      Review from {new Date(entryDate).toLocaleDateString()} by {user}.
    </p>
    <p>
      Traveled {new Date(travelDate).toLocaleDateString()} with {traveledWith}.
    </p>
    <p>{texts[Locales.nl]}</p>
  </Card>
);

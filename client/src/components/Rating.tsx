import React, { FC } from 'react';
import { LinearProgress } from '@material-ui/core';

interface RatingProps {
  name: string;
  value: number;
}

export const Rating: FC<RatingProps> = ({ name, value }) => {
  return (
    <>
      <div className="rating__info">
        <div className="rating__title">{name}</div>
        <div className="rating__counter">{value}</div>
      </div>
      <div className="rating__bar">
        <LinearProgress variant="determinate" value={value * 10} />
      </div>
    </>
  );
};

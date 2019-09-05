import { FC } from 'react';
import React from 'react';
import { CircularProgress } from '@material-ui/core';

interface LoaderProps {
  loading: boolean;
}

export const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={loading ? 'loader' : 'loader'}>
      <CircularProgress />
    </div>
  );
};

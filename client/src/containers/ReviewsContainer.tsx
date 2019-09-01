import React from 'react';
import { Filters } from '../components/Filters';
import { ReviewList } from '../components/ReviewsList';
import { Pagination } from '../components/Pagination';

export class ReviewsContainer extends React.Component {
  render() {
    return <div className="todo">
        <Filters/>
        <ReviewList/>
        <Pagination/>
    </div>;
  }
}

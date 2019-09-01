import React from 'react';
import { Review } from './Review';

export class ReviewList extends React.Component {
  render() {
    const pageLength = 5;
    const reviews = [];
    for (let i = 0; i < pageLength; i += 1) {
      reviews.push(<Review />);
    }

    return <div className="todo">{reviews}</div>;
  }
}

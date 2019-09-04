import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Filters } from '../components/Filters';
import { ReviewList } from '../components/ReviewsList';
import { Pagination } from '../components/Pagination';
import { IReview } from '../core/models/review.model';
import { IState } from '../core/store/reducers';
import { getReviews, getReviewsSuccess } from '../core/store/actions/reviews';
import { getReviewsFromApi } from '../core/services/reviews';

interface ReviewsContainerProps {
  loading: boolean;
  error: any;
  reviews?: IReview[];
  getReviews: Function;
  getReviewsSuccess: Function;
}

export class ReviewsContainer extends React.Component<ReviewsContainerProps> {
  componentDidMount() {
    const { getReviews, getReviewsSuccess } = this.props;

    getReviews();
  }
  render() {
    const { reviews, loading, error } = this.props;

    if (loading) {
      return <div>Looooooooading....</div>;
    }

    if (!reviews) {
      return <div className="todo">No reviews!</div>;
    }

    return (
      <div>
        <Filters />
        <ReviewList reviews={reviews} />
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  loading: state.reviews.loading,
  error: state.reviews.error,
  reviews: state.reviews.data
});

const mapDispatchToProps = {
  getReviews,
  getReviewsSuccess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);

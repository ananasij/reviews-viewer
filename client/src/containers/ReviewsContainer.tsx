import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Filters } from '../components/Filters';
import { ReviewList } from '../components/ReviewsList';
import { Pagination } from '../components/Pagination';
import { IReview } from '../core/models/review.model';
import { IState } from '../core/store/reducers';
import { getReviews } from '../core/store/actions/reviews';

interface ReviewsContainerProps {
  loading: boolean;
  error: any;
  reviews?: IReview[];
  getReviews: Function;
}

export class ReviewsContainer extends React.Component<ReviewsContainerProps> {
  componentDidMount() {
    const { getReviews } = this.props;

    setTimeout(getReviews, 1000);
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getReviews: () => dispatch(getReviews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);

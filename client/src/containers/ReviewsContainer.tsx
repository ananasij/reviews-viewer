import React from 'react';
import { connect } from 'react-redux';

import { Filters } from '../components/Filters';
import { ReviewList } from '../components/ReviewsList';
import { Pagination } from '../components/Pagination';
import { IReview } from '../core/models/review.model';
import { IState } from '../core/store/reducers';
import { getReviews, getReviewsSuccess } from '../core/store/actions/reviews';

interface ReviewsContainerProps {
  loading: boolean;
  error: any;
  reviews?: IReview[];
  getReviews: Function;
}

export class ReviewsContainer extends React.Component<ReviewsContainerProps> {
  state = {
    traveledWith: 'ALL', //TODO: save to enum for all components
    sortBy: 'entryDate' //TODO: save to enum for all components
  };

  componentDidMount() {
    this.triggerGetReviews();
  }

  onTraveledWithChange = (value: string) => {
    this.setState({ traveledWith: value }, this.triggerGetReviews);
  };

  onSortByChange = (value: string) => {
    this.setState({ sortBy: value }, this.triggerGetReviews);
  };

  triggerGetReviews = () => {
    const { traveledWith, sortBy } = this.state;
    this.props.getReviews(traveledWith, sortBy);
  };

  render() {
    const { traveledWith, sortBy } = this.state;

    const { reviews, loading, error } = this.props;

    if (loading) {
      return <div>Looooooooading....</div>;
    }

    if (!reviews) {
      return <div className="todo">No reviews!</div>;
    }

    return (
      <div>
        <Filters
          traveledWith={traveledWith}
          onTraveledWithChange={this.onTraveledWithChange}
          sortBy={sortBy}
          onSortByChange={this.onSortByChange}
        />
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

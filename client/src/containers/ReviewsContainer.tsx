import React from 'react';
import { connect } from 'react-redux';

import { Filters } from '../components/Filters';
import { ReviewList } from '../components/ReviewsList';
import { Pagination } from '../components/Pagination';
import { IReview } from '../core/models/review.model';
import { IState } from '../core/store/reducers';
import { getReviews } from '../core/store/actions/reviews';
import { PAGE_SIZE } from '../core/constants';
import { Loader } from '../components/Loader';

interface ReviewsContainerProps {
  loading: boolean;
  error: any;
  reviews?: IReview[];
  totalPages: number;
  getReviews: Function;
}

export class ReviewsContainer extends React.Component<ReviewsContainerProps> {
  private container = React.createRef<HTMLDivElement>();

  state = {
    traveledWith: 'ALL', //TODO: save to enum for all components
    sortBy: 'entryDate', //TODO: save to enum for all components
    page: 1
  };

  componentDidMount() {
    this.triggerGetReviews();
  }

  onTraveledWithChange = (value: string) => {
    this.setState({ traveledWith: value, page: 1 }, this.triggerGetReviews);
  };

  onSortByChange = (value: string) => {
    this.setState({ sortBy: value, page: 1 }, this.triggerGetReviews);
  };

  onPageChange = (value: number) => {
    this.setState({ page: value }, this.triggerGetReviews);
    if (this.container.current) {
      this.container.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  triggerGetReviews = () => {
    const { traveledWith, sortBy, page } = this.state;
    this.props.getReviews(traveledWith, sortBy, page);
  };

  render() {
    const { traveledWith, sortBy, page } = this.state;
    const { reviews, loading, error, totalPages } = this.props;

    const renderedReviews =
      reviews && reviews.length ? (
        <>
          <ReviewList reviews={reviews} />
          <Pagination page={page} totalPages={totalPages} onPageChange={this.onPageChange} />
        </>
      ) : (
        <div>No reviews found</div>
      );

    return (
      <div ref={this.container}>
        <Filters
          traveledWith={traveledWith}
          onTraveledWithChange={this.onTraveledWithChange}
          sortBy={sortBy}
          onSortByChange={this.onSortByChange}
        />
        <div className="reviews">
          {loading && <Loader loading={loading} />}
          {renderedReviews}
        </div>
        {!!error && <div>{error}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  loading: state.reviews.loading,
  error: state.reviews.error,
  reviews: state.reviews.data,
  totalPages: Math.ceil(state.reviews.total / PAGE_SIZE)
});

const mapDispatchToProps = {
  getReviews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);

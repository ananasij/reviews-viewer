import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Chip } from '@material-ui/core';

import { IRatingCategory, IRatings } from '../core/models/rating.model';
import { getRatings } from '../core/store/actions/ratings';
import { IState } from '../core/store/reducers';
import { Loader } from '../components/Loader';
import { Rating } from '../components/Rating';

interface RatingContainerProps {
  loading: boolean;
  error: any;
  ratings?: IRatings;
  getRatings: Function;
}

class RatingsContainer extends Component<RatingContainerProps> {
  componentDidMount() {
    const { getRatings } = this.props;

    getRatings();
  }

  render() {
    const { ratings, loading, error } = this.props;

    const content = !ratings ? (
      ''
    ) : (
      <>
        <h2 className="ratings__title">
          Rated by guests: <Chip label={ratings.general.general} color="primary" />{' '}
        </h2>

        <div className="ratings__sections">
          <div className="ratings__section">
            <h3 className="ratings__subtitle">Ratings by topics:</h3>
            <div className="ratings__categories">
              {Object.keys(ratings.aspects).map(key => (
                <div className="ratings__category" key={key}>
                  <Rating name={key} value={(ratings.aspects as IRatingCategory)[key]} />
                </div>
              ))}
            </div>
          </div>

          <div className="ratings__section">
            <h3 className="ratings__subtitle">Ratings from guests who traveled with...</h3>
            <div className="ratings__categories">
              {Object.keys(ratings.traveledWith as IRatingCategory).map(key => (
                <div className="ratings__category" key={key}>
                  <Rating name={key} value={(ratings.traveledWith as IRatingCategory)[key]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );

    return (
      <Paper className="ratings ratings__container">
        {loading && <Loader loading={loading} />}
        {content}
        {!!error && <div>{error}</div>}
      </Paper>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  loading: state.ratings.loading,
  error: state.ratings.error,
  ratings: state.ratings.data
});

const mapDispatchToProps = {
  getRatings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingsContainer);

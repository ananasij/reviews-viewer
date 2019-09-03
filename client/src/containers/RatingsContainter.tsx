import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Divider } from '@material-ui/core';

import { IRatingCategory, IRatings } from '../core/models/rating.model';
import { getRatings } from '../core/store/actions/ratings';
import { IState } from '../core/store/reducers';

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

    if (loading) {
      return <div>Looooooooading....</div>;
    }

    if (!ratings) {
      return <div className="todo">No ratings!</div>;
    }

    const aspects = Object.keys(ratings.aspects).map(key => (
      <div className="ratings__category">
        <div>{key}:</div>
        <div>{(ratings.aspects as IRatingCategory)[key]}</div>
      </div>
    ));

    const traveledWith = Object.keys(
      ratings.traveledWith as IRatingCategory
    ).map(key => (
      <div className="ratings__category">
        <div>{key}:</div>
        <div>{(ratings.traveledWith as IRatingCategory)[key]}</div>
      </div>
    ));

    return (
      <Paper className="ratings">
        <h1>Rating: {ratings.general.general}</h1>
        <h4>By aspects</h4>
        <div className="ratings__categories">{aspects}</div>
        <Divider variant="fullWidth" />
        <h4>By traveler type</h4>
        <div className="ratings__categors">{traveledWith}</div>
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
  getRatings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingsContainer);

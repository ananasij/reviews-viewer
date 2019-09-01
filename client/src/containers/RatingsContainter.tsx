import React, { Component } from 'react';
import { Paper, Divider } from '@material-ui/core';
import { RatingCategory } from '../core/models/rating.model';

export class RatingsContainer extends Component {
  state = {
    ratings: {
      general: {
        general: 9
      },
      aspects: {
        location: 7,
        service: 0,
        priceQuality: 6,
        food: 0,
        room: 0,
        childFriendly: 8,
        interior: 0,
        size: 0,
        activities: 0,
        restaurants: 0,
        sanitaryState: 0,
        accessibility: 0,
        nightlife: 0,
        culture: 0,
        surrounding: 0,
        atmosphere: 0,
        noviceSkiArea: 0,
        advancedSkiArea: 0,
        apresSki: 0,
        beach: 0,
        entertainment: 0,
        environmental: 0,
        pool: 0,
        terrace: 0
      },
      traveledWith: {
        family: 6,
        friends: 8,
        other: 10,
        couple: 10,
        single: 9
      }
    }
  };

  render() {
    const aspects = Object.keys(this.state.ratings.aspects).map(key => (
      <div className="ratings__category">
          <div>{key}:</div>
          <div>{(this.state.ratings.aspects as RatingCategory)[key]}</div>
      </div>
    ));

    const traveledWith = Object.keys(this.state.ratings.traveledWith).map(
      key => (
        <div className="ratings__category">
            <div>{key}:</div>
            <div>{(this.state.ratings.traveledWith as RatingCategory)[key]}</div>
        </div>
      )
    );

    return (
      <Paper className="ratings">
        <h1>Rating: {this.state.ratings.general.general}</h1>
        <h4>By aspects</h4>
        <div className="ratings__categories">{aspects}</div>
        <Divider variant="fullWidth" />
        <h4>By traveler type</h4>
        <div className="ratings__categors">{traveledWith}</div>
      </Paper>
    );
  }
}

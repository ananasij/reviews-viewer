import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { TraveledWith } from '../core/models/review.model';

const filteringWithOptions = ['ALL'].concat(Object.keys(TraveledWith));
const sortingOptions = ['entryDate', 'travelDate'];

interface FiltersProps {
  traveledWith: string;
  onTraveledWithChange: (value: string) => any;
  sortBy: string;
  onSortByChange: (value: string) => any;
}

export class Filters extends React.Component<FiltersProps> {
  handleFilterChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    this.props.onTraveledWithChange(event.target.value as string);
  };

  handleSortChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    this.props.onSortByChange(event.target.value as string);
  };

  render() {
    const { traveledWith, sortBy } = this.props;

    return (
      <form className="filters">
        <div className="filters__field-wrapper">
          <FormControl className="filters__field">
            <InputLabel htmlFor="traveledWith">Filter by</InputLabel>
            <Select
              value={traveledWith}
              onChange={this.handleFilterChange}
              inputProps={{
                name: 'traveledWith',
                id: 'traveledWith'
              }}
            >
              {filteringWithOptions.map(option => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="filters__field-wrapper">
          <FormControl className="filters__field">
            <InputLabel htmlFor="sortBy">Sort by</InputLabel>
            <Select
              value={sortBy}
              onChange={this.handleSortChange}
              inputProps={{
                name: 'sortBy',
                id: 'sortBy'
              }}
            >
              {sortingOptions.map(option => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </form>
    );
  }
}

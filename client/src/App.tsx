import React from 'react';

import './App.scss';
import ReviewsContainer from './containers/ReviewsContainer';
import RatingsContainer from './containers/RatingsContainter';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="base base__container">
        <RatingsContainer />
        <ReviewsContainer />
      </div>
    </div>
  );
};

export default App;

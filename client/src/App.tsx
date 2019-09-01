import React from 'react';

import './App.scss';
import ReviewsContainer from './containers/ReviewsContainer';
import RatingsContainer from './containers/RatingsContainter';

const App: React.FC = () => {
  return (
    <div className="App todo">
      <RatingsContainer/>
      <ReviewsContainer/>
    </div>
  );
};

export default App;

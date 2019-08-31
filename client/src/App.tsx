import React from 'react';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </div>
  );
};

export default App;

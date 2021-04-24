import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Button>
      Learning <img src={logo} className="App-logo" alt="logo" width="56px"/>
      </Button>
    </div>
  );
}

export default App;

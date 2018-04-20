import React, { Component } from 'react';
import Sites from './components/sites';

class App extends React.Component
{
  render() { return 
    <div>
      <h1 className="house">Hello Seth</h1>
      <p>Below this is where sites will go.</p>
      <Sites />
    </div>
  }
}

export default App;

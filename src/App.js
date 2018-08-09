import React, { Component } from 'react';
import './App.css';

import CurrentWeather from './components/CurrentWeather';

class App extends Component {
  render() {
    return (
      <div>
        <CurrentWeather zip='84047' />
      </div>
    );
  }
}

export default App;

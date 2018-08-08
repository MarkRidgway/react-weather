import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import WeatherCard from './components/WeatherCard';
import CurrentWeather from './components/CurrentWeather';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <CurrentWeather zip='48322' />
      </Wrapper>
    );
  }
}

export default App;

const demoWeather = {
  "coord": {
      "lon": -111.89,
      "lat": 40.76
  },
  "weather": [
      {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 93.2,
      "pressure": 1019,
      "humidity": 14,
      "temp_min": 93.2,
      "temp_max": 93.2
  },
  "visibility": 16093,
  "wind": {
      "speed": 3.74,
      "deg": 279
  },
  "clouds": {
      "all": 40
  },
  "dt": 1532030160,
  "sys": {
      "type": 1,
      "id": 2802,
      "message": 0.0052,
      "country": "US",
      "sunrise": 1532002390,
      "sunset": 1532055254
  },
  "id": 5780993,
  "name": "Salt Lake City",
  "cod": 200
};

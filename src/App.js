import React, { Component } from 'react';
import './App.css';
import './assets/css/weather-icons.css';
import './assets/css/weather-icons-wind.css';
import {ThemeProvider} from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import WeekForecast from './components/WeekForecast';

const themeOG = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
};

const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 26, // rem
      md: 47, // rem
      lg: 60  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 26, // em
      md: 47, // em
      lg: 60  // em
    }
  }
};


class App extends Component {
  constructor(){
    super();

    this.state = {
      location: {
        lat: '40.7765868',
        long: '-111.9905245',
        city: 'Salt Lake City'
      },
      weather: {
        summary: 'Clear',
        icon: 'clear-day',
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 72.48,
        apparentTemperature: 72.48,
        dewPoint: 39.18,
        humidity: 0.3,
        pressure: 1012.07,
        windSpeed: 3.7,
        windGust: 3.7,
        windBearing: 71,
        cloudCover: 0,
        uvIndex: 0,
        visibility: 10,
        ozone: 278.76
      },
      forecast: this.createEmptyForecast()
    };

    this.onZipChange = this.onZipChange.bind(this);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <Header onZipChange={ this.onZipChange } zip='84047' />
          <CurrentWeather weather={ this.state.weather } />
          <WeekForecast forecast={ this.state.forecast } />
        </Grid>
      </ThemeProvider>
    );
  }

  onZipChange(zip){
    // this.setState({ zip });
  }

  createEmptyForecast(){
    const emptyWeather = {
      temperatureHigh: '',
      temperatureLow: '',
      icon: '',
      summary: '',
      sunriseTime: '',
      sunsetTime: '',
      precipProbability: '',
      precipType: ''
    };

    let forecast = [];

    for(let i = 0; i < 7; i++){
      forecast[i] = Object.assign({}, emptyWeather);
    }

    return forecast;
  }
}

export default App;

// weather: {
//   temperature: '',
//   apparentTemperature: '',
//   summary: '',
//   icon: '',
//   precipIntensity: '',
//   precipProbability: '',
//   dewPoint: '',
//   humidity: '',
//   pressure: '',
//   cloudCover: '',
//   uvIndex: '',
//   visibility: '',
//   ozone: '',
//   windSpeed: '',
//   windGust: '',
//   windBearing: ''
// }
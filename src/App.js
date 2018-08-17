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
        latitude: '40.7765868',
        longitude: '-111.9905245',
        city: 'Salt Lake City'
      }
    };

    this.onZipChange = this.onZipChange.bind(this);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <Header onZipChange={ this.onZipChange } zip='84047' />
          <CurrentWeather
            location={ this.state.location.city }
            latitude={ this.state.location.latitude }
            longitude={ this.state.location.longitude }
            />
          <WeekForecast
            location={ this.state.location.city }
            latitude={ this.state.location.latitude }
            longitude={ this.state.location.longitude } />
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

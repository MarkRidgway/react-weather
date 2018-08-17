import React, { Component } from 'react';
import './App.css';
import './assets/css/weather-icons.css';
import './assets/css/weather-icons-wind.css';
import {ThemeProvider} from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import WeekForecast from './components/WeekForecast';
import { fetchLocation } from './helpers/google-maps-api';

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
        zip: '84047',
        latitude: '',
        longitude: '',
        city: ''
      }
    };

    this.onZipChange = this.onZipChange.bind(this);

    this.onZipChange(this.state.location.zip);

    setInterval(() => {
      console.log(this.state.location.city);
    }, 1000);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid>
          <Header onZipChange={ this.onZipChange } zip={ this.state.location.zip } />
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
    fetchLocation(zip)
      .then( (response) => {
        console.log(response);
        var latitude = response.results[0].geometry.location.lat;
        var longitude = response.results[0].geometry.location.lng;
        var city = response.results[0].address_components[1].long_name;

        this.setState({ location: {
          latitude,
          longitude,
          city,
          zip
        }})

      })
      .catch( (error) => console.log(error));
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

import React, { Component } from 'react';
import { fetchWeather } from '../helpers/open-weather-api';
import WeatherCard from './WeatherCard';

class CurrentWeather extends Component {
  constructor(){
    super();
    this.state = {
      temperature: 0,
      weatherId: 800,
      weatherDescription: ''
    };
  }

  render(){
    return(
      <div>
        <h1>Current Weather for { this.props.zip }</h1>
        <WeatherCard
          temperature={ this.state.temperature }
          weatherId={ this.state.weatherId }
          weatherDescription={ this.state.weatherDescription }/>
      </div>
    );
  }

  componentDidMount(){
    fetchWeather(this.props.zip)
    .then( (data) => {
      console.log(data);
      let temperature = data.main.temp;
      let weatherId = data.weather[0].id;
      let weatherDescription = data.weather[0].description;

      this.setState({temperature, weatherId, weatherDescription});
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}

export default CurrentWeather;

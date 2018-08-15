import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { fetchWeather } from '../helpers/open-weather-api';
import WeatherCard from './WeatherCard';
import WeatherData from './WeatherData';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        summary: 'Clear',
        icon: 'clear-day',
        precipIntensity: 0,
        precipProbability: 0.06,
        precipType: 'rain',
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
      }
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <h2>Current Weather</h2>
          </Col>
          <Col xs={12} md={6} >
            <WeatherCard
              temperature={this.state.weather.temperature}
              apparentTemperature={this.state.weather.apparentTemperature}
              icon={this.state.weather.icon}
              summary={this.state.weather.summary} />
          </Col>
          <Col xs={12} md={6} >
            <WeatherData
              location={ this.props.location }
              precipIntensity={ this.state.weather.precipIntensity }
              precipProbability={ this.state.weather.precipProbability }
              precipType={ this.state.weather.precipType }
              dewPoint={ this.state.weather.dewPoint }
              humidity={ this.state.weather.humidity }
              pressure={ this.state.weather.pressure }
              windSpeed={ this.state.weather.windSpeed }
              windGust={ this.state.weather.windGust }
              windBearing={ this.state.weather.windBearing }
              cloudCover={ this.state.weather.cloudCover }
              uvIndex={ this.state.weather.uvIndex }
              visibility={ this.state.weather.visibility }
              ozone={ this.state.weather.ozone } />
          </Col>
        </Row>
      </div>
    );
  }

  componentDidMount() {
    this.fetchWeatherData(this.props.zip);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.zip != nextProps.zip){
      this.fetchWeatherData(nextProps.zip);
    }
  }

  fetchWeatherData(zip){
    fetchWeather(zip)
      .then((res) => {
        // console.log(res);
        let weather = {
          temp: res.main.temp,
          id: res.weather[0].id,
          description: res.weather[0].description
        };

        let data = {
          windDirection: res.wind.deg,
          windSpeed: res.wind.speed,
          humidity: res.main.humidity,
          pressure: res.main.pressure,
          city: res.name
        };

        // TODO add snow and rain checks

        // this.setState({ weather, data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default CurrentWeather;

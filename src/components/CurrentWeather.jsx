import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { fetchWeather } from '../helpers/dark-sky-api';
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
    this.fetchWeatherData(this.props.latitude, this.props.longitude);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.latitude != nextProps.latitude || this.props.longitude != nextProps.longitude){
      this.fetchWeatherData(nextProps.latitude, nextProps.longitude);
    }
  }

  fetchWeatherData(latitude, longitude){
    fetchWeather(latitude,longitude )
      .then((res) => {
        var weather = {
          summary: res.currently.summary,
          icon: res.currently.icon,
          precipIntensity: res.currently.precipIntensity,
          precipProbability: res.currently.precipProbability,
          precipType: res.currently.precipType,
          temperature: res.currently.temperature,
          apparentTemperature: res.currently.apparentTemperature,
          dewPoint: res.currently.dewPoint,
          humidity: res.currently.humidity,
          pressure: res.currently.pressure,
          windSpeed: res.currently.windSpeed,
          windGust: res.currently.windGust,
          windBearing: res.currently.windBearing,
          cloudCover: res.currently.cloudCover,
          uvIndex: res.currently.uvIndex,
          visibility: res.currently.visibility,
          ozone: res.currently.ozone
        };

        this.setState({ weather });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default CurrentWeather;

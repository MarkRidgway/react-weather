import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { fetchWeather } from '../helpers/dark-sky-api';
import WeatherCard from './WeatherCard';
import WeatherData from './WeatherData'
import Heading from './Heading';

const CurrentWeatherWrapper = styled.div`
  margin-bottom: 3em;
`;

const HeadingBorder = Heading.extend`
  margin-bottom: 0.8em;
  padding-bottom: 0.4em;
  border-bottom: 1px solid #ccc;
`;

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        summary: '',
        icon: '',
        precipIntensity: '',
        precipProbability: '',
        precipType: '',
        temperature: '',
        apparentTemperature: '',
        dewPoint: '',
        humidity: '',
        pressure: '',
        windSpeed: '',
        windGust: '',
        windBearing: '',
        cloudCover: '',
        uvIndex: '',
        visibility: '',
        ozone: ''
      }
    };
  }

  render() {
    return (
      <CurrentWeatherWrapper>
        <Grid>
          <Row center='lg'>
            <Col xs={12}>
              <HeadingBorder>Current Weather for { this.props.location }</HeadingBorder>
            </Col>
            <Col xs={12} md={4} lg={4} >
              <WeatherCard
                temperature={this.state.weather.temperature}
                apparentTemperature={this.state.weather.apparentTemperature}
                icon={this.state.weather.icon}
                summary={this.state.weather.summary} />
            </Col>
            <Col xs={12} md={8} lg={6}>
              <WeatherData
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
        </Grid>
      </CurrentWeatherWrapper>
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
    if(latitude && longitude){
      fetchWeather(latitude,longitude ).then((res) => {
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
      }).catch((error) => console.log(error) );
    }
  }
}

export default CurrentWeather;

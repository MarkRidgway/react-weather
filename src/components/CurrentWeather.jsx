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
        temp: 0,
        id: 800,
        description: ''
      },
      data: {
        windDirection: 0,
        windSpeed: 0,
        humidity: 0,
        pressure: 0,
        city: ''
      }
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={6} >
            <WeatherCard
              temperature={this.state.weather.temp}
              weatherId={this.state.weather.id}
              weatherDescription={this.state.weather.description} />
          </Col>
          <Col xs={12} md={6} >
            <WeatherData
              windSpeed={ this.state.data.windSpeed }
              windDirection={ this.state.data.windDirection }
              humidity={ this.state.data.humidity }
              pressure={ this.state.data.pressure }
              city={ this.state.data.city } />
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
        console.log(res);
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

        this.setState({ weather, data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default CurrentWeather;

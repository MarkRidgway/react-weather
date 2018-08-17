import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import moment from 'moment';
import { fetchForecast } from '../helpers/dark-sky-api';
import ForecastCard from './ForecastCard';

class WeekForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: this.createEmptyForecast()
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <h2>This Week</h2>
          </Col>
          <Col xs={12} md={6} >
            { this.state.forecast.map( (day) => (
              <ForecastCard
                key={ day.time }
                time={ day.time }
                temperatureHigh={ day.temperatureHigh }
                temperatureLow={ day.temperatureLow }
                icon={ day.icon }
                summary={ day.summary }
                sunriseTime={ day.sunriseTime }
                sunsetTime={ day.sunsetTime }
                precipProbability={ day.precipProbability }
                precipType={ day.precipType } />
            )) }
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
    fetchForecast(latitude,longitude )
      .then((res) => {
        var days = res.daily.data.map( (day) => {
          return {
            time: day.time,
            temperatureHigh: day.temperatureHigh,
            temperatureLow: day.temperatureLow,
            icon: day.icon,
            summary: day.summary,
            sunriseTime: day.sunriseTime,
            sunsetTime: day.sunsetTime,
            precipProbability: day.precipProbability,
            precipType: day.precipType
          };
        });

        this.setState({ forecast: days.slice(1, 8) });

      })
      .catch((error) => {
        console.log(error);
      });
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
      forecast[i].time = i;
    }

    return forecast;
  }
}

export default WeekForecast;

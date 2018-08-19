import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { fetchForecast } from '../helpers/dark-sky-api';
import ForecastCard from './ForecastCard';
import Heading from './Heading';

const ForecastWrapper = styled.div`
  padding: 30px 0;
  color: #EFEFEF;
  background-color: #405663;
`;

class WeekForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: this.createEmptyForecast()
    };
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row>
            <Col xs={12}>
              <Heading>Forecast for { this.props.location }</Heading>
            </Col>
          </Row>
        </Grid>
        <ForecastWrapper>
          <Grid>
            <Row>
              { this.state.forecast.map( (day) => (
                <Col xs={6} md={3} lg key={ day.key }>
                  <ForecastCard
                    time={ day.time }
                    temperatureHigh={ day.temperatureHigh }
                    temperatureLow={ day.temperatureLow }
                    icon={ day.icon }
                    summary={ day.summary }
                    sunriseTime={ day.sunriseTime }
                    sunsetTime={ day.sunsetTime }
                    precipProbability={ day.precipProbability }
                    precipType={ day.precipType } />
                </Col>
              )) }
            </Row>
          </Grid>
        </ForecastWrapper>
      </React.Fragment>
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
      fetchForecast(latitude,longitude ).then((res) => {
        var days = res.daily.data.map( (day) => {
          return {
            key: day.time,
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

        this.setState({ forecast: days });

      }).catch((error) => console.log(error) );
    }
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
      forecast[i].key = i;
    }

    return forecast;
  }
}

export default WeekForecast;

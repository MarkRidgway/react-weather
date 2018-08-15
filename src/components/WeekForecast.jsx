import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { forecast } from '../helpers/open-weather-api';
import WeatherCard from './WeatherCard';

class WeekForecast extends Component {
  constructor(props) {
    super(props);

    let emptyWeather = {
      temp: 0,
      id: 800,
      description: ''
    };

    let forecast = [];

    for(let i = 0; i < 5; i++){
      forecast[i] = Object.assign({}, emptyWeather);
    }


    this.state = {
      forecase: forecast
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
            { this.state.forecase.map( (weather, index) => (
              <WeatherCard
                key={index}
                temperature={weather.temp}
                weatherId={weather.id}
                weatherDescription={weather.description} />
            )) }
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
    forecast(zip)
      .then( (response) => {
      })
      .catch( (error) => {
        console.log(error);
      })

  }
}

export default WeekForecast;

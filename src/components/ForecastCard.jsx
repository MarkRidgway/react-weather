import React, { Component } from 'react';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon/WeatherIcon';

const CardWrap = styled.div`
  outline: 1px dashed red;
  margin-bottom: 20px;
`;

const Card = styled.div`
  min-width: 180px;
  min-height: 200px;
  padding: 20px;
  background: #5B6F80;
  border: 2px solid #747A80;
  border-radius: 10px;
`;

class ForecastCard extends Component {
  render() {
    return (
      <div>
        <div>
          <div>{ this.props.time }</div>
          <div>{ this.props.temperatureHigh }</div>
          <div>{ this.props.temperatureLow }</div>
          <div>{ this.props.icon }</div>
          <div>{ this.props.summary }</div>
          <div>{ this.props.sunriseTime }</div>
          <div>{ this.props.sunsetTime }</div>
          <div>{ this.props.precipProbability }</div>
          <div>{ this.props.precipType }</div>
          <WeatherIcon
            icon={ this.props.icon }
            summary={ this.props.summary } />
        </div>
      </div>
    );
  }
}

export default ForecastCard;
// temperatureHigh
// temperatureLow
// icon
// summary
// sunriseTime
// sunsetTime
// precipProbability
// precipType
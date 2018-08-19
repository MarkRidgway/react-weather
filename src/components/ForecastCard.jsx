import React, { Component } from 'react';
import styled from 'styled-components';

const CardWrap = styled.div`
  outline: 1px dashed red;
  margin-bottom: 20px;
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
          <div>{ this.props.icon }</div>
          <div>{ this.props.summary }</div>
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
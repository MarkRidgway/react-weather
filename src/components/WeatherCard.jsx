import React, { Component } from 'react';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon/WeatherIcon';

const Card = styled.div`
  max-width: 240px;
  margin: 0 auto;
`;

const TemperatureWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const Temperature = styled.div`
  margin: 0 0 0.2em 0;
  font-size: 3em;
  font-family: 'Oswald', sans-serif;
`;

const FeelsLike = styled.div`
  margin-left: 0.2em;
  font-size: 1.4em;
  font-weight: 500;
  font-style: italic;
  color: #555;
`;

class WeatherCard extends Component {
  render() {
    return (
      <Card>
        <WeatherIcon
          icon={ this.props.icon }
          summary={ this.props.summary } />
        <TemperatureWrapper>
          <Temperature>
            { Math.floor(this.props.temperature) }°
          </Temperature>
          <FeelsLike>
            Feels Like { Math.floor(this.props.apparentTemperature) }°
          </FeelsLike>
        </TemperatureWrapper>
      </Card>
    );
  }
}

export default WeatherCard;

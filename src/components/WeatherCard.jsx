import React, { Component } from 'react';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon/WeatherIcon';

const Card = styled.div``;

const TemperatureWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const Temperature = styled.h3`
  margin: 0 0 0.2em 0;
  font-size: 3em;
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
          { this.feelsLikeDisplay() }
        </TemperatureWrapper>
      </Card>
    );
  }

  feelsLikeDisplay(){
    let showApparentTemperature = true;
    let temperature = Math.floor(this.props.temperature);
    let apparentTemperature = Math.floor(this.props.apparentTemperature);

    if(apparentTemperature !== temperature || showApparentTemperature){
      return(
        <FeelsLike>
          Feels Like { apparentTemperature }°
        </FeelsLike>
      );
    }
  }
}

export default WeatherCard;

import React, { Component } from 'react';
import styled from 'styled-components';

import WeatherIcon from './WeatherIcon/WeatherIcon';
import Temperature from './Temperature';

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  min-width: 180px;
  min-height: 200px;
  padding: 20px;
  background: #5B6F80;
  border: 2px solid #747A80;
  border-radius: 10px;
`;

class WeatherCard extends Component {
  render() {
    return (
      <div>
        <div>
          <Temperature
            apparentTemperature={ this.props.apparentTemperature }
            temperature={ this.props.temperature } />
          <WeatherIcon
            icon={ this.props.icon }
            summary={ this.props.summary } />
        </div>
      </div>
    );
  }
}

export default WeatherCard;

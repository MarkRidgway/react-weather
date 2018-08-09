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
      <CardWrap>
        <Card>
          <Temperature temperature={ this.props.temperature } />
          <WeatherIcon
            weatherId={ this.props.weatherId }
            weatherDescription={ this.props.weatherDescription } />
        </Card>
      </CardWrap>
    );
  }
}

export default WeatherCard;

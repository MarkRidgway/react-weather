import React, { Component } from 'react';
import styled from 'styled-components';

import './WeatherIcon.css';

const IconWrap = styled.div`
  color: #fff;
  text-align: center;
`;

const WiIcon = styled.i`
  margin-bottom: 0.2em;
  font-size: 4em;
`;

const Description = styled.p`
  margin: 0.4em 0;
  font-size: 1.4em;
`;

class WeatherIcon extends Component {
  render() {
    return (
      <IconWrap>
        <WiIcon
          className={ `wi wi-owm-${ this.props.weatherId }` }>
        </WiIcon>
        <Description>{ this.props.weatherDescription }</Description>
      </IconWrap>
    );
  }
}

export default WeatherIcon;

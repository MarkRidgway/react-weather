import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherIcons from 'react-weathericons';

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
      <div>
        <i className={ `wi wi-owm-${ this.props.weatherId }` }></i>
        <div>{ this.props.weatherDescription }</div>
      </div>
    );
  }
}

export default WeatherIcon;

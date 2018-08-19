import React, { Component } from 'react';
import styled from 'styled-components';

const IconWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  font-size: 1.3em;
`;

const Icon = styled.i`
  font-size: 4em;
`;

const Summary = styled.div`
  margin-left: 0.2em;
  font-size: 1.4em;
  font-family: 'Oswald', sans-serif;
`;

class WeatherIcon extends Component {
  render() {
    return (
      <IconWrap>
        <Icon className={ `wi wi-forecast-io-${ this.props.icon }` }></Icon>
        <Summary>{ this.props.summary }</Summary>
      </IconWrap>
    );
  }
}

export default WeatherIcon;

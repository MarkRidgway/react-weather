import React, { Component } from 'react';
import styled from 'styled-components';

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
        <i className={ `wi wi-forecast-io-${ this.props.icon }` }></i>
        <div>{ this.props.summary }</div>
      </div>
    );
  }
}

export default WeatherIcon;

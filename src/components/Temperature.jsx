import React, { Component } from 'react';
import styled from 'styled-components';

const TempDisplay = styled.p`
  margin: 0.5em 0;
  font-size: 3em;
  color: #fff;
  text-align: center;
`;

class Temperature extends Component {
  render() {
    return (
      <TempDisplay>{ this.props.temperature }°</TempDisplay>
    );
  }
}

export default Temperature;

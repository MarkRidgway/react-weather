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
      <React.Fragment>
        <div>{ this.props.temperature }°</div>
        { this.feelsLike() }
      </React.Fragment>
    );
  }

  feelsLike(){
    if(this.props.apparentTemperature){
      return(
        <div>Feels Like { this.props.apparentTemperature }°</div>
      );
    }
  }
}

export default Temperature;

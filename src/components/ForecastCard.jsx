import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const CardWrap = styled.div`
  padding: 10px 4px;
  margin-bottom: 20px;
  color: #2C3942;
  text-align: center;
  background-color: #EFEFEF;
  border-radius: 10px;
`;

const Date = styled.div`
  margin-bottom: 0.8em;
  font-size: 1.2em;
  font-family: 'Oswald', sans-serif;
`;

const IconWrapper = styled.div`
  margin-bottom: 0.4em;
`;

const Icon = styled.i`
  font-size: 2em;
`;

const Temperature = styled.div``;

const High = styled.span`
  color: #E54C42;
`;
const Low = styled.span`
  margin-left: 0.4em;
  color: #405663;
`;

class ForecastCard extends Component {
  render() {
    return (
      <CardWrap>
        <Date>
          { this.displayDate() }
        </Date>
        <IconWrapper>
          <Icon className={ `wi wi-forecast-io-${ this.props.icon }` }></Icon>
        </IconWrapper>
        <Temperature>
          <High>{ Math.floor(this.props.temperatureHigh) }°</High>
          <Low>{ Math.floor(this.props.temperatureLow) }°</Low>
        </Temperature>
      </CardWrap>
    );
  }

  displayDate(){
    const date = moment.unix(this.props.time).format('ddd M-D');
    const today = moment().format('ddd M-D');

    if(date === today){
      return(
        <div>Today</div>
      );
    }
    else{
      return(
        <div>{ moment.unix(this.props.time).format('ddd M-D') }</div>
      );
    }
  }
}

export default ForecastCard;

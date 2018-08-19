import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const DataTable = styled.table`
  border-collapse: collapse;

  tr{
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  th, td{
    padding: 0.4em;
    padding-bottom: 0;
    font-size: 1.2em;
  }

  th{
    text-align: right;
  }
`;

const Date = styled.div`
  margin-bottom: 1em;
  font-size: 1.4em;
  text-align: left;
  font-family: 'Oswald', sans-serif;
`;

const Wind = styled.span`
  span {
    margin-left: 0.2em;

  }
`;

class WeatherData extends Component {
  render() {
    return (
      <div>
        <Date>
          { moment().format('dddd, MMMM Do YYYY') } <strong>{ moment().format('h:mm:ss a') }</strong>
        </Date>
        <DataTable>
          <tbody>
            <tr>
              <th>Pressure</th>
              <td>{ Math.round(this.props.pressure) } mb</td>
            </tr>
            <tr>
              <th>PrecipProbability</th>
              <td>{ this.props.precipProbability * 100 } % chance { this.props.precipType || 'rain' }</td>
            </tr>
            { this.precipIntensity() }
            <tr>
              <th>DewPoint</th>
              <td>{ this.props.dewPoint }°</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{ Math.floor(this.props.humidity * 100) }%</td>
            </tr>
            { this.cloudCover() }
            { this.uvIndex() }
            <tr>
              <th>Visibility</th>
              <td>{ this.props.visibility }mi</td>
            </tr>
            <tr>
              <th>Ozone</th>
              <td>{ this.props.ozone }</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>
                <Wind>
                  <i className={`wi wi-wind towards-${this.props.windBearing}-deg`}></i>
                  <span>{ Math.round(this.props.windSpeed) }mph</span>
                </Wind>
              </td>
            </tr>
            <tr>
              <th>Gusts</th>
              <td>{ Math.round(this.props.windGust) }mph</td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    );
  }

  precipIntensity(){
    if(this.props.precipIntensity > 0){
      return(
        <tr>
          <th>PrecipIntensity</th>
          <td>{ this.props.precipIntensity }</td>
        </tr>
      );
    }
  }

  cloudCover(){
    if(this.props.cloudCover > 0){
      return(
        <tr>
          <th>CloudCover</th>
          <td>{ this.props.cloudCover }</td>
        </tr>
      );
    }
  }

  uvIndex(){
    if(this.props.uvIndex > 0){
      return(
        <tr>
          <th>UV Index</th>
          <td>{ this.props.uvIndex }</td>
        </tr>
      );
    }
  }
}

export default WeatherData;

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
              <th>PrecipIntensity</th>
              <td>{ this.props.precipIntensity }</td>
            </tr>
            <tr>
              <th>PrecipProbability</th>
              <td>{ this.props.precipProbability * 100 } % chance { this.props.precipType || 'rain' }</td>
            </tr>
            <tr>
              <th>DewPoint</th>
              <td>{ this.props.dewPoint }°</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{ this.props.humidity }%</td>
            </tr>
            <tr>
              <th>CloudCover</th>
              <td>{ this.props.cloudCover }</td>
            </tr>
            <tr>
              <th>UvIndex</th>
              <td>{ this.props.uvIndex }</td>
            </tr>
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
                <i className={`wi wi-wind towards-${this.props.windBearing}-deg`}></i>
                <span>{ Math.round(this.props.windSpeed) }mph</span>
                <span>Gusts{ Math.round(this.props.windGust) }mph</span>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    );
  }
}

export default WeatherData;

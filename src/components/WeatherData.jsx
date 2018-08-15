import React, { Component } from 'react';
import moment from 'moment';

class WeatherData extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{ this.props.location }</h3>
        <div>{ moment().format('dddd, MMMM Do YYYY') } <strong>{ moment().format('h:mm:ss a') }</strong></div>
        <table>
          <tbody>
            <tr><th>Pressure</th><td>{ Math.round(this.props.pressure) } mb</td></tr>
            <tr><th>PrecipIntensity</th><td>{ this.props.precipIntensity }</td></tr>
            <tr><th>PrecipProbability</th><td>{ this.props.precipProbability * 100 } % chance { this.props.precipType || 'rain' }</td></tr>
            <tr><th>DewPoint</th><td>{ this.props.dewPoint }°</td></tr>
            <tr><th>Humidity</th><td>{ this.props.humidity }%</td></tr>
            <tr><th>CloudCover</th><td>{ this.props.cloudCover }</td></tr>
            <tr><th>UvIndex</th><td>{ this.props.uvIndex }</td></tr>
            <tr><th>Visibility</th><td>{ this.props.visibility }mi</td></tr>
            <tr><th>Ozone</th><td>{ this.props.ozone }</td></tr>
            <tr>
              <th>Wind</th>
              <td>
                <i className={`wi wi-wind towards-${this.props.windBearing}-deg`}></i>
                <span>{ Math.round(this.props.windSpeed) }mph</span>
                <span>Gusts{ Math.round(this.props.windGust) }mph</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeatherData;

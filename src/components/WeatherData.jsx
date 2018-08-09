import React, { Component } from 'react';
import moment from 'moment';

class WeatherData extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.city }</h2>
        <div>{ moment().format('dddd, MMMM Do YYYY') } <strong>{ moment().format('h:mm:ss a') }</strong></div>
        <table>
          <tbody>
            <tr>
              <th>Humidity</th>
              <td>{ this.props.humidity }</td>
            </tr>
            <tr>
              <th>Pressure</th>
              <td>{ this.props.pressure }</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>
                <i className='wi wi-wind towards-{ this.props.windDirection }-deg'></i>
                <span>{ this.props.windSpeed }mph</span>
              </td>
            </tr>
            <tr>
              <th>Sunrise</th>
              <td>{ moment(this.props.sunrise).format('h:mm:ss a') }</td>
            </tr>
            <tr>
              <th>Sunset</th>
              <td>{ moment(this.props.sunset).format('h:mm:ss a') }</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeatherData;

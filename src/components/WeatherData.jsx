import React, { Component } from 'react';
import moment from 'moment';

class WeatherData extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.city }</h3>
        <div>{ moment().format('dddd, MMMM Do YYYY') } <strong>{ moment().format('h:mm:ss a') }</strong></div>
        <table>
          <tbody>
            <tr>
              <th>Humidity</th>
              <td>{ this.props.humidity }%</td>
            </tr>
            <tr>
              <th>Pressure</th>
              <td>{ this.props.pressure }</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>
                <i className='wi wi-wind towards-{ this.props.windDirection }-deg'></i>
                <span>{ Math.round(this.props.windSpeed) }mph</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeatherData;

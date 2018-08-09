import React, { Component } from 'react';
import moment from 'moment';

class WeatherData extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{ this.props.location }</h1>
        <table>
          <tr>
            <th>Time</th>
            <td>{ moment().format("dddd, MMMM Do YYYY, h:mm:ss a") }</td>
          </tr>
          <tr>
            <th>Wind</th>
            <td>{ this.props.windSpeed } { this.props.windDirection }</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default WeatherData;

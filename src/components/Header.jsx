import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

class Header extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={6} >
            <h1>React Weather</h1>
            <input type="text" placeholder='Zip' />
            <span>Imperial</span> | <a href="#">Metric</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;

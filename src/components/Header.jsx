import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = { zip: props.zip };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ zip: event.target.value });

    // Check if entered zip is a valid zip code
    // TODO add feedback to show zip is not valid
    if(/(^\d{5}$)/.test(event.target.value)){
      this.props.onZipChange(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={6} >
            <h1>React Weather</h1>
            <input
              name='zip'
              type="text"
              placeholder='Zip'
              value={ this.state.zip }
              onChange={ this.handleChange }/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;

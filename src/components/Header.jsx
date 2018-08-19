import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  color: #fff;
  background-color: #333;

  h1{
    text-align: center;
  }
`;

const SearchWrapper = styled.div`
  padding: 30px 0;
  text-align: center;

  input {
    margin: 0 auto;
    width: 100%;
    max-width: 140px;
    padding: 8px 10px;
    color: #333;
    font-size: 1.2em;
    text-align: center;
    border: 2px solid #333;
  }
`;

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
      <React.Fragment>
        <HeaderWrapper>
          <Grid>
            <Row>
              <Col xs={12} >
                <h1>React Weather</h1>
              </Col>
            </Row>
          </Grid>
        </HeaderWrapper>
        <SearchWrapper>
          <Grid>
            <Row>
              <Col xs={12}>
                <input
                  name='zip'
                  type="text"
                  placeholder='Zip'
                  value={ this.state.zip }
                  onChange={ this.handleChange }/>
              </Col>
            </Row>
          </Grid>
        </SearchWrapper>
      </React.Fragment>
    );
  }
}

export default Header;

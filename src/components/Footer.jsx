import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { fetchForecast } from '../helpers/dark-sky-api';
import ForecastCard from './ForecastCard';
import Heading from './Heading';

const FooterWrapper = styled.footer`
  padding: 30px 0;
  color: #EFEFEF;
  background-color: #405663;
`;

class Footer extends Component {
  render(){
    return(
      <FooterWrapper>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <p>Mark Ridgway</p>
            </Col>
            <Col xs={12} md={12}>
              <p>Mark Ridgway</p>
            </Col>
          </Row>
        </Grid>

      </FooterWrapper>
    );
  }

}

export default Footer;

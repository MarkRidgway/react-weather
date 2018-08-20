import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  color: #EFEFEF;
  background-color: #2C3942;

  a, strong{
    color: #BED3DD;
  }
`;

class Footer extends Component {
  render(){
    return(
      <FooterWrapper>
        <Grid>
          <Row>
            <Col xs={12}>
              <p>A demo application by <a href='https://mark.world'>Mark Ridgway</a>. View Code on <a href='https://github.com/MarkRidgway/react-weather'>GitHub</a></p>
              <p>Built with <strong>React</strong> using <strong>Styled Components</strong> and <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></p>
            </Col>
          </Row>
        </Grid>
      </FooterWrapper>
    );
  }

}

export default Footer;

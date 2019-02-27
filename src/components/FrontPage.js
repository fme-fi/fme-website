import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Slider from 'react-slick';
import forEach from 'lodash/forEach';
import WelcomeText from './WelcomeText';
import TopMenuBar from './common/TopMenuBar';
import Box from './common/Box';
import styled from 'styled-components';
import LatestPosts from './common/LatestPosts';
import Management from './common/Management';
import finlandVideo from './assets/others/suomi2.mp4';
import { Container, Row, Col } from 'react-flexybox';
import NextEvents from './common/NextEvents';
import PastEvents from './common/PastEvents';


const TestimonialSectionContainer = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  padding: 0 50px ;
`;

const SectionTitle = styled.h1`
    position: relative;
    top: 200px;
    margin: 50px 20px;
`;

class Header extends Component {
  render() {    
    return(
      <div>        
        <Container fluid>
          <TopMenuBar />        
          <WelcomeText />               
          <div className="videoBackground">
            <video autoPlay muted>
              <source src={finlandVideo} type="video/mp4" />
            </video>
          </div>
          <Row center>
            <Col lg={12}>
              <Box />        
            </Col>
          </Row>
          <Row center>                                        
            <Col lg={10}>
              <SectionTitle>
                Következő eseményeink
              </SectionTitle>
              <NextEvents />
            </Col>
          </Row>
          <Management />
          <div className="pastEventsContainer">
              <PastEvents />
          </div>
          </Container>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

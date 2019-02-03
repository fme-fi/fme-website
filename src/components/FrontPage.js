import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Slider from 'react-slick';
import forEach from 'lodash/forEach';
import WelcomeText from './WelcomeText';
import TopMenuBar from './common/TopMenuBar';
import Box from './common/Box';
import styled from 'styled-components';
import Marhak from './assets/others/marhabg.png';
import Testimonials from './common/Testimonials';
import LatestPosts from './common/LatestPosts';
import { Parallax, Background } from 'react-parallax';
import Management from './common/Management';
import finlandVideo from './assets/others/suomi.mp4';
import { Container, Row, Col } from 'react-flexybox';
import NextEvents from './common/NextEvents';

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
      <Container fluid>
        <TopMenuBar />        
        <WelcomeText />               
        <div className="videoBackground">
          <video autoPlay muted>
            <source src={finlandVideo} type="video/mp4" />
          </video>
        </div>
        <Box />        
        <Row center>                                        
          <Col lg={10}>
            <SectionTitle>
              Következő eseményeink
            </SectionTitle>
            <NextEvents />
          </Col>
        </Row>
        <Management />
        </Container>
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

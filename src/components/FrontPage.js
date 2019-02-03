import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Slider from 'react-slick';
import forEach from 'lodash/forEach';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.css';
import SliderImage3 from './assets/slider/slider_1.jpg';
import SliderImage2 from './assets/slider/slider_2.jpg';
import SliderImage1 from './assets/slider/slider_3.jpg';
import SliderImage4 from './assets/slider/slider_4.jpg';
import SliderImage5 from './assets/slider/slider_5.jpg';
import SliderImage6 from './assets/slider/slider_6.jpg';
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

const sliderConfig = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
};

const sliderImages = [
  SliderImage5, SliderImage6
];

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
          <Col flex={6}>
            <NextEvents />
          </Col>
          <Col flex={6}>
            <TestimonialSectionContainer style={{backgroundColor: `#dedede`}}>
                <div className="contentWrapper">
                  <div className="posts">
                    <LatestPosts />                
                  </div>
                </div>
            </TestimonialSectionContainer>
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

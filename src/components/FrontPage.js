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

const TestimonialSectionContainer = styled.div`
  display: flex;
  height: 890px;
  background-size: cover;
  margin-top: -10px;
  position: relative;  
  align-items: center;
  &:before {
    background-color: rgba(27, 27, 27, 0.8);
    
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
  }
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
      <div>
        <TopMenuBar />        
        <WelcomeText />               
        <div className="videoBackground">
          <video autoPlay>
            <source src={finlandVideo} type="video/mp4" />
          </video>
        </div>
        <Box />
        <TestimonialSectionContainer style={{backgroundImage: `url(${Marhak})`}}>
            <div className="contentWrapper">
              <Testimonials />
              <div className="posts">
                <LatestPosts />                
              </div>
            </div>
        </TestimonialSectionContainer>
        <Management />
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

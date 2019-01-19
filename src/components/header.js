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
import WelcomeText from './WelcomeText';
import TopMenuBar from './common/TopMenuBar';
import Box from './common/Box';

const sliderConfig = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
};

const sliderImages = [
  SliderImage1, SliderImage2, SliderImage3, SliderImage4
];

class Header extends Component {
  render() {    
    return(
      <div>
        <TopMenuBar />        
        <WelcomeText />
        <Slider className="heroSlider" {...sliderConfig}>
          {
            sliderImages.map((currentSliderImage, i) =>
              <div
              className="slideBackground"                   
              key={i}>                
                <div style={{backgroundImage: `url(${currentSliderImage})`,
                height: `110vh`,
                backgroundSize: `cover`,
                backgroundPosition: `50% 50%`
                }}></div>
              </div>
            )
          }          
        </Slider>
        <Box />
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

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import WelcomeText from './WelcomeText';
import TopMenuBar from './common/TopMenuBar';
import styled from 'styled-components';
import Management from './common/Management';
import finlandVideo from './assets/others/suomi2.mp4';
import { Container, Row, Col } from 'react-flexybox';
import NextEvents from './common/NextEvents';
import PastEvents from './common/PastEvents';
import { getBgImages } from '../store/actions/getbackGroundImages'
import Slider from "react-slick";
import Christmas from '../components/christmas'
import { MoonLoader } from 'react-spinners';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import christmasImage from './christmas/fmexmas.png'

const SectionTitle = styled.h1`
    position: relative;
    top: 200px;
    margin: 50px 20px;
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
};

const BgImage = styled.div`
	background-image: url(${props => props.src});
	background-size: cover;
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showChristmas: false,
    }
  }
  componentDidMount() {
    Promise.all([
      this.props.onFetchBackgroundImages()
    ]).then(() => {
      // this.isChristMasTime()
    })
  }

  isChristMasTime() {
    const christmasDate = new Date()
    const currentYear = christmasDate.getFullYear()
    const currentMonth = christmasDate.getMonth() + 1
    const currentDate = christmasDate.getDate()
    const christMasPeriod = {
      startDate: 17,
      endDate: 27,
      month: 12
    }
    console.debug('currentYear', currentYear)
    if (currentDate <= christMasPeriod.endDate ) {
      this.setState({
        showChristmas: true
      })
    } else {
      this.setState({
        showChristmas: false,
      })
    }
  }
  render() {
    
    return(
      <div>
        <Container fluid>
          <TopMenuBar />
          <WelcomeText isChristmas={this.state.showChristmas} />
          <Slider
            {...settings}
          >
            {
              this.props.bgImages.bgImages.length
              ? this.props.bgImages.bgImages.map(currBgImage => (
								<BgImage
									key={currBgImage.id}
									className="videoBackground"
                  src={!this.state.showChristmas ? `https://farm${currBgImage.farm}.staticflickr.com/${currBgImage.server}/${currBgImage.id}_${currBgImage.secret}_b.jpg` : christmasImage}
								>
                  {
                    !this.state.showChristmas
                      ? (
                        <p className="imp">
                          photo: flickr
                        </p>
                      )
                      : null
                  }
                </BgImage>
							))
							: <div className="loadingOverlay">
                  <div className="loading">
                    <MoonLoader
                    size={40}
                    color="#fff"
                    />
                  </div>
              </div>
            }
          </Slider>
          <Row center>
            <Col className="upcomingEventsWrapper" lg={10}>
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

const mapStateToProps = state => ({
  bgImages: state.bgImages,
})

const mapDispatchToProps = dispatch => ({
  onFetchBackgroundImages: () => dispatch(getBgImages())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

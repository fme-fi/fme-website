import React, { Component } from 'react';
import styled from 'styled-components';
import { wordpressIds } from './../../postIds';
import { StaticQuery, graphql, Link } from 'gatsby';
import Testimonial from './Testimonial';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.css';

const TestionialWrapper = styled.div``;

const sliderConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

class Testimonials extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query TestimonialQuery {
                        allWordpressPage(filter: { wordpress_parent: {eq: 548} }) {
                            edges {
                            node {
                                id
                                title
                                content
                                excerpt
                                date
                                modified
                                slug
                                status        
                            }
                            }
                        }
                    }
                `}
                render={data => (
                    <TestionialWrapper className="testimonialWrapper">
                        <h1>
                            Tagjaink mondták
                        </h1>
                        <Slider className="testimonialSlider" {...sliderConfig}>
                        {
                            data.allWordpressPage.edges.map(({node}) => (
                            <Testimonial key={node.id} name={node.title} />        
                            ))                                                               
                        }                            
                        </Slider>
                    </TestionialWrapper>
                )}
                />            
        )
    }
}

export default Testimonials;
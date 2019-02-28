import React, { Component } from "react"
import { Container, Row, Col } from 'react-flexybox';
import { StaticQuery, graphql, Link } from 'gatsby';
import { forEach } from 'lodash'
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import striptags from 'striptags';
import SelectedEvent from "../components/common/SelectedEvent";
import MobileMenuToggle from './../components/common/MobileMenuToggle';
import { connect } from 'react-redux';
import { toggleMobileMenu } from './../store/actions/toggleMobileMenu';

const myEventsList = [ 
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2019, 3, 0),
    end: new Date(2019, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2019, 3, 7),
    end: new Date(2019, 3, 10),
  },
]

class BasicMap extends Component {  
  constructor(props) {
    super(props);
    this.handleEventClick = this.handleEventClick.bind(this);
    this.state = {
      selectedEvent: null
    }

  }

  handleEventClick(event) {
    console.log(event);
    this.setState({
      selectedEvent: event
    })
  }

  componentDidMount() {
    this.props.onToggleMobileMenu(false);
  }

  render() {  
    let businessRules = [];  
    return (
      <StaticQuery
        query={graphql`
          query upcomingEvents {
            allWordpressPage(filter: { wordpress_parent: {eq: 617} }) {
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
                      featured_media {
                          id
                          source_url
                          }                      
                      }
                  }
              }
          }
        `}
          render={data => (
            forEach(data.allWordpressPage.edges, (key, value) => {
                        let convertedObject = JSON.parse(striptags(key.node.excerpt).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"'));                        
                        businessRules.push({
                          title: key.node.title.replace(/&nbsp;/g, ' '), 
                          date: new Date(convertedObject.date),
                          featuredImage: key.node.featured_media.source_url, 
                          responsible: convertedObject.responsible, 
                          location: convertedObject.location
                        })                                                
            }),                        
            <div>                
                <TopMenuBar subPage={true} />                
                <MobileMenuToggle subPage={false} />    
                <Container>
                  <Row center={true}>
                    <Col lg={10} xs={12}>                                  
                      {
                        data.allWordpressPage.edges.map(({node}, index) => (                          
                            <SelectedEvent key={index} selectedEvent={businessRules[index]} />                         
                        ))
                      }
                    </Col>                    
                  </Row>
                </Container>                
              </div>
          )}
      />
    )
  }
}

const mapStateToProps = state => ({
  isMobileMenuOpen: state.isMobileMenuOpen.isMobileMenuOpen
})

const mapDispatchToProps = dispatch => ({
  onToggleMobileMenu: (isMobileMenuOpen) => dispatch(toggleMobileMenu(isMobileMenuOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicMap)
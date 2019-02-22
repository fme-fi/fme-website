import React, { Component } from "react"
import { Container, Row, Col } from 'react-flexybox';
import { StaticQuery, graphql, Link } from 'gatsby';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { forEach } from 'lodash'
import './../style/partials/_calendar/calendar.scss';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import striptags from 'striptags';
import SelectedEvent from './../components/common/SelectedEvent';

const localizer = BigCalendar.momentLocalizer(moment);

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

const views = {
  month: true,
  week: false,
  agenda: false,
}

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
                          start: new Date(convertedObject.date), 
                          end: new Date(convertedObject.date), 
                          allDay: true,
                          featuredImage: key.node.featured_media.source_url, 
                          responsible: convertedObject.responsible, 
                          location: convertedObject.location
                        })                        
            }),            
            <div>                
                <TopMenuBar subPage={true} />
                <Container>
                  <Row center={true}>
                    <Col lg={6} xs={12}>
                    <div className="eventCalendarContainer">
                      <BigCalendar
                      localizer={localizer}
                      events={businessRules}
                      startAccessor="start"
                      endAccessor="end"
                      views={['month', 'agenda']}
                      onSelectEvent={(event) => this.handleEventClick(event)}
                      />
                    </div>
                    </Col>
                    <Col lg={6}>
                      {
                        this.state.selectedEvent ? 
                          <SelectedEvent selectedEvent={this.state.selectedEvent} />
                        : null
                      }
                    </Col>
                  </Row>
                </Container>
                <Footer />
              </div>
          )}
      />
    )
  }
}

export default BasicMap
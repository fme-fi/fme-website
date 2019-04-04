import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { wordpressIds } from './../../postIds';
import striptags from 'striptags';
import { forEach } from 'lodash';
import UpcomingEventCards from './UpcomingEventCards';
import { Container, Row, Col } from 'react-flexybox';
import { orderBy } from 'lodash';

class NextEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),            
        }        
      } 

    render() {        
        let businessRules = [];
        return (
            <StaticQuery
                query={graphql`
                    query upComingEventsQuery {
                        allWordpressPage( filter: { wordpress_parent: {eq: 617} } limit: 3 ) {
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
                        businessRules.push(convertedObject)                        
                    }),
                    
                        <div className="nextEventsContainer">                                              
                        {
                            data.allWordpressPage.edges.map(({node}, index) => (
                                <a key={node.id} href={`/${node.slug}`}>
                                    <Col key={index} className="nextEventContainer" xs={12} lg={4}>
                                        <span className="eventDate">
                                            <span>
                                                {
                                                    businessRules[index].date
                                                }
                                            </span> 
                                        </span>
                                        <UpcomingEventCards featuredImage={node.featured_media.source_url} title={node.title} key={index} businessRules={businessRules[index]} />                                
                                    </Col>
                                </a>                  
                            ))
                        }
                        </div>                      
                )}
                />
        )
    }
}

export default NextEvents;
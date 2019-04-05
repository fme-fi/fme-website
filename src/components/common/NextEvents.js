import React, { Component } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { wordpressIds } from './../../postIds';
import striptags from 'striptags';
import { forEach } from 'lodash';
import UpcomingEventCards from './UpcomingEventCards';
import { Container, Row, Col } from 'react-flexybox';
import { orderBy } from 'lodash';

export default () => {
        const data = useStaticQuery(graphql`
        query upComingEventsQuery {
            allWordpressPage( filter: { wordpress_parent: {eq: 617} } ) {
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
        `);
        const result = data.allWordpressPage.edges.sort( (a,b) => {  
            return new Date(JSON.parse(striptags(a.node.excerpt).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"')).date) - new Date(JSON.parse(striptags(b.node.excerpt).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"')).date);                        
        });
    return (                                         
        <div className="nextEventsContainer">                                              
        {
            result.map(({node}, index) => {
                if ( index <= 3) {
                    return (
                        <a key={node.id} href={`/${node.slug}`}>
                            <Col key={index} className="nextEventContainer" xs={12} lg={4}>
                                <span className="eventDate">
                                    
                                </span>
                                <UpcomingEventCards featuredImage={node.featured_media.source_url} title={node.title} key={index} businessRules={JSON.parse(striptags(node.excerpt).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"'))} />                                
                            </Col>
                        </a>
                )
                }
            })
        }
        </div>
    )
}

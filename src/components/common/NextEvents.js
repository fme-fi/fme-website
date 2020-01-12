import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import striptags from 'striptags';
import UpcomingEventCards from './UpcomingEventCards';
import { Col } from 'react-flexybox';
import { FaExclamationTriangle } from 'react-icons/fa/'

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
            result.length ? result.map(({node}, index) => {
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
            :   <div className="noUpcoming">
                    <p>
                       <FaExclamationTriangle size="2em" /> Jelenleg nincs eseményünk, de már dolgozunk a következőkön! Nézzen vissza később!
                    </p>
                </div>
        }
        </div>
    )
}

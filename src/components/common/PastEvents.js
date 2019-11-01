import React, { Component } from 'react';
import { Container, Row, Col } from 'react-flexybox';
import { StaticQuery, graphql } from 'gatsby';
import striptags from 'striptags';

class PastEvents extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);            
    }

    handleClick(postSlug) {
        this.props.histpry.push(postSlug);
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query LatestEventsQuery {
                        allWordpressPost(sort: { fields: [date], order: DESC }, filter: {categories: {eq: 669435248}}, limit: 3) {
                            edges {
                                node {
                                    id
                                    slug
                                    title
                                    excerpt
                                    date
                                    featured_media {
                                        id
                                        source_url
                                    }                                                                        
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <Container fluid={false}>
                        <h1 style={{margin: `20px`}}>Előző eseményeink</h1>
                        <Row center>
                        {
                                data.allWordpressPost.edges.map(({node}) => {
                                    return (
                                        <a key={node.id} href={`/blog/${node.slug}`}>
                                            <Col className="onePastEvent" xs={12} lg={3}>
                                            <div style={{backgroundImage: `url(${node.featured_media.source_url})`}} className="featuredImage">
                                                <span>
                                                    {
                                                        new Date(node.date).toLocaleString("hu", { month: "long"  }) + ", " + new Date(node.date).getFullYear()
                                                    }
                                                </span>
                                            </div>
                                                <div className="content">
                                                    <h1>
                                                    {
                                                        striptags(node.title).replace('&nbsp;', ' ')
                                                    }                                            
                                                    </h1>
                                                </div>
                                            </Col>
                                        </a>
                                    )                                    
                                })
                            }                                  
                        </Row>
                    </Container>
                )}
                />
        ) 
    }
}

export default PastEvents;
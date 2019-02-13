import React, { Component } from 'react';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import { Container, Row, Col } from 'react-flexybox';
import { StaticQuery, graphql, Link } from 'gatsby';
import { element } from 'prop-types';

class Archive extends Component {        
    render() { 
        let postDates = []
        let currentDate = null
        return ( 
            <StaticQuery
                query={graphql`
                    query allWordpressPost {
                        allWordpressPost {
                            edges {
                            node {
                                wordpress_id
                                id
                                title        
                                date
                                slug                                
                            }
                            }
                        }
                    }
                `}
                render={data => (
                    <div>
                        <TopMenuBar subPage={true} />
                        <Container fluid className="archiveList">
                            <Row center>
                                <Col lg={8}>
                                    <h1>
                                        {`Archiv (${data.allWordpressPost.edges.length})`}
                                    </h1>
                                    <div>                                        
                                        <ul>
                                            {
                                                data.allWordpressPost.edges.map(({node}, index) => (                                                    
                                                    <Link key={index} to={`blog/${node.slug}`}>
                                                        <li dangerouslySetInnerHTML={{__html: node.title}} />                                                                                                            
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Footer />
                    </div>
                )}
                />
         );
    }
}
 
export default Archive;
import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import striptags from 'striptags';

const LatestPostsContainer = styled.div``;

class LatestPosts extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query LatestPostQuery {
                        allWordpressPost ( filter: {categories: {ne: 669435248}} limit:3) {
                            edges {
                            node {
                                id
                                slug
                                title        
                                excerpt
                                date        
                            }
                            }
                        }
                    }
                `}
                render={data => (                    
                    <div>
                    {
                        data.allWordpressPost.edges.map(({node}) => (
                            <LatestPostsContainer key={node.id} className="latestPostContainer">                
                                <Link to={`/blog/${node.slug}`}>
                                    <h1>
                                    <p>
                                        {                                        
                                            new Date(node.date).toLocaleString('hu-hu', { month: 'short', day: 'numeric'  })
                                        }
                                    </p>
                                        {
                                            striptags(node.title).replace('&nbsp;', ' ')
                                        }
                                    </h1>
                                </Link>
                                <p>
                                    {
                                        striptags(node.excerpt).substring(0, 200) + "..."
                                    }
                                    <a href="#">
                                        <span>
                                            tovább olvasom
                                        </span>
                                    </a>
                                </p>
                            </LatestPostsContainer>
                        ))
                    }
                    </div>
                )}
                />                   
        )
    }
}

export default LatestPosts; 
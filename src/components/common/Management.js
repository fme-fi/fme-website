import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const ProfilePicture = styled.div`
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 100%;
`;

class Management extends Component {

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query ManagementQuery {
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
                    console.log(data),
                    <div className="Management">
                    <h1>Vezetőség</h1>                    
                        <div className="facesContainer">                                                
                        {
                            data.allWordpressPage.edges.map(({node}) => (                            
                                <div key={node.id} className="face">
                                    <ProfilePicture style={{backgroundImage: `url(${node.featured_media.source_url})`}} />
                                    <h2>
                                        {node.title}
                                    </h2>
                                    <h3>
                                        Vezetőségi tag
                                    </h3>
                                </div>                                                                                               
                            ))
                        }                        
                        </div>                      
                    </div>
                )}
                />             
        );
    }
}

export default Management;
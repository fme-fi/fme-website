import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import striptags from 'striptags';
import Instagram from './../assets/social/instagram.svg';
import Facebook from './../assets/social/facebook.svg';
import styled from 'styled-components';
import FmeLogo from './../assets/others/logo.svg';

const SocialImage = styled.img``;

const FmeLogoImage = styled.img`
    max-width: 100px;
    display: flex;
    align-self: center;
    &:hover {
        pointer: none;
        border: none;        
    }
`;

class TopMenuBar extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query MenuStructureQuery {
                        allWordpressPage(filter: { wordpress_parent: {eq: 532} }) {
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
                    console.log(data),
                <div className="topMenuContainer">
                    <div className="topMenuBar">
                        <ul>
                        <li>
                            <FmeLogoImage src={FmeLogo} />
                        </li>
                        {
                            data.allWordpressPage.edges.map(({node}) => (
                                
                                    <li key={node.slug}>
                                        <Link to={`/${node.slug}`}>
                                            {node.title}
                                            <p>
                                                {
                                                    striptags(node.excerpt)
                                                }
                                            </p>
                                        </Link>
                                    </li>                                
                            ))
                        }
                        </ul>
                        <ul>
                            <li>
                                Közösségi média
                            </li>
                            <li>
                                <SocialImage src={Instagram} />
                            </li>
                            <li>
                                <SocialImage src={Facebook} />
                            </li>
                        </ul>
                    </div>          
                </div>
                    
                
            )}
            />
        )
    }
}

export default TopMenuBar;
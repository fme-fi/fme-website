import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from './../assets/others/foreground.png';
import { StaticQuery, graphql, Link } from 'gatsby';
import Deer from './../assets/others/deer_brown.gif';
import HuFlag from './../assets/others/hu_flag.gif'; 
import { VelocityComponent } from 'velocity-react';
const BackgroundImageContainer = styled.div``;

class Footer extends Component {
    render() {
        
        return (
            <StaticQuery
                query={graphql`
                    query MenuStructureQueryFooter {
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
                <div>                
                    <VelocityComponent runOnMount={false} animation={{backgroundPositionX: "10000%"}} easing="linear" duration={45e5}>
                        <div style={{
                            backgroundImage: `url(${backgroundImage})`,
                            
                        }} className="footerContainer">
                            <BackgroundImageContainer />                
                            <img alt="deer" className="deer" src={Deer} />
                            <img alt="hungarian flag" className="huFlag" src={HuFlag} />
                            <div className="footerMenuContainer">
                                <ul>
                                    <li>
                                        <a href="https://richardzilahi.hu">code: richardzilahi</a>
                                    </li>
                                    {
                                        data.allWordpressPage.edges.map(({node}) => (
                                            <li key={node.id}>
                                                <Link to={`/${node.slug}`}>
                                                    {node.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </VelocityComponent>
                </div>
                )}
                />            
        )
    }
}

export default Footer;
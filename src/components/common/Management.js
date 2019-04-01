import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SVGInline from "react-svg-inline";
import circleSvg from './circleSvg';
import { Container, Row, Col } from 'react-flexybox';
import striptags from 'striptags';

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
                    <Row center>
                        <Col lg={10} xs={12}>
                            <div className="Management">
                                <h1 style={{margin: `20px`}}>Vezetőség</h1>                    
                                    <div className="facesContainer">                                                
                                    {
                                    data.allWordpressPage.edges.map(({node}) => (                            
                                        <div key={node.id} className="face">                                                                    
                                        <SVGInline
                                        svg={
                                            '<?xml version="1.0" encoding="UTF-8"?><svg width="130px" height="130px" viewBox="0 0 306 318" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Path</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-72.000000, -59.000000)" stroke="#1C3142" stroke-width="3"><path d="M76.4140625,259.75 C70.8193324,226.903298 73.7908322,217.303422 81.96875,184.34375 C88.2864678,158.88129 88.8100955,143.951265 104.539063,123.167969 C134.202478,83.9725435 210.675438,82.0238733 254.339844,91.6679688 C277.49146,96.7814334 297.30535,114.958442 312.4375,131.777344 C314.25826,133.801061 313.788174,137.319363 315.6875,139.269531 C351.909032,176.460665 355.99741,168.228646 368.621094,216.300781 C370.848565,224.783196 373.200191,233.250339 374.832031,241.867187 C375.644124,246.155401 377.025464,250.688417 375.933594,254.914062 C372.964354,266.405309 360.351055,299.208564 349.816406,310.535156 C315.303131,347.642968 225.909436,353.306553 180.535156,349.25 C153.520513,346.834836 121.647755,304.590063 108.359375,284.996094 C101.153541,274.370955 95.1079565,262.993065 88.9960937,251.703125 C87.466021,248.876748 86.087876,245.881848 85.4765625,242.726562 C78.3522022,205.954282 98.1332429,162.950087 114.671875,131.550781 C123.369293,115.038358 143.225195,100.264714 157.3125,90.0273438 C187.071433,68.4012618 199.890891,59.454958 235.757812,61.2070312 C251.730083,61.9872651 278.954279,85.185668 290.09375,92.859375 C346.784825,131.91246 349.96229,155.578481 369.742188,226.160156 C371.58675,232.742207 373.777942,256.058078 372.140625,262.210938 C359.614899,309.281261 329.52252,325.009577 289.699219,347.625 C259.589202,364.724305 216.982571,383.350773 181.347656,370 C137.782512,353.678133 102.271498,313.870331 79.3203125,274.980469 C78.4022742,273.42489 77.7886871,271.612839 77.703125,269.808594 C77.2463306,260.17619 77.1764012,250.50774 77.703125,240.878906 C79.0218321,216.772132 85.3528977,153.475783 109.71875,142.261719"id="Path"></path></g></g></svg>'
                                            } />
                                            <ProfilePicture style={{backgroundImage: `url(${node.featured_media.source_url})`}} />
                                            <h2>
                                                {node.title}
                                            </h2>
                                            <h3>
                                                {
                                                    JSON.parse(striptags(node.excerpt).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"')).role 
                                                }
                                            </h3>
                                        </div>                                                                                               
                                    ))
                                    }                        
                                </div>                      
                            </div>
                        </Col>
                    </Row>
                )}
                />             
        );
    }
}

export default Management;
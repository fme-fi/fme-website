import React, { Component } from 'react';
import { Container, Row, Col } from 'react-flexybox';
import ListElement from './../components/common/ListElement';
import striptags from 'striptags';
import UsefulSidebar from './../components/UsefulSidebar';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import { usefulLinks } from './../helpers/usefulLinks';

class LinkCollection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let sectionTitle = [];
        let linksObject = JSON.parse(striptags(this.props.links).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"'));
        let linkObjectKeys = Object.keys(linksObject);                    
        for (let i = 0; i<linkObjectKeys.length; i++) {
            let thisLinkSectionTitle =  usefulLinks.find(function(element) {
                return element.slug === linkObjectKeys[i];
            });
            sectionTitle.push(thisLinkSectionTitle.hu);
        }
        return (
            <div>
                <TopMenuBar subPage={true} />
                <Container className="linkCollection">                
                <Row>                    
                    <Col style={{margin: `20px`}} xs={12} lg={8}>
                        <ul>
                            <li>
                            {
                                sectionTitle[0]
                            }
                            </li>
                            {
                                linksObject.social.map((currentLink, index) => (
                                    <ListElement description={currentLink.desc} key={index} url={currentLink.url} title={currentLink.title} />
                                ))  
                            }
                        </ul>
                        <ul>
                            <li>
                            {
                                sectionTitle[1]
                            }
                            </li>
                            {
                                linksObject.city.map((currentLink, index) => (
                                    <ListElement description={currentLink.desc} key={index} url={currentLink.url} title={currentLink.title} />
                                ))  
                            }
                        </ul>
                        <ul>
                        <li>
                            {
                                sectionTitle[2]
                            }
                            </li>
                            {
                                linksObject.travelling.map((currentLink, index) => (
                                    <ListElement description={currentLink.desc} key={index} url={currentLink.url} title={currentLink.title} />
                                ))  
                            }
                        </ul>
                        <ul>
                            <li>
                            {
                                sectionTitle[3]
                            }
                            </li>
                            {
                                linksObject.houseing.map((currentLink, index) => (
                                    <ListElement description={currentLink.desc} key={index} url={currentLink.url} title={currentLink.title} />
                                ))  
                            }
                        </ul>
                    </Col>             
                    <Col lg={3}>
                        <UsefulSidebar />
                    </Col>       
                </Row>                
            </Container>
            <Footer />
            </div>
        )
    }
}

export default LinkCollection;
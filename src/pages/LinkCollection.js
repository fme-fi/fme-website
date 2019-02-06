import React, { Component } from 'react';
import { Container, Row, Col } from 'react-flexybox';
import { SteppedLineTo } from 'react-lineto';
import ListElement from './../components/common/ListElement';
import striptags from 'striptags';
import UsefulSidebar from './../components/UsefulSidebar';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';

class LinkCollection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let linksObject = JSON.parse(striptags(this.props.links).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"'));
        let linkObjectKeys = Object.keys(linksObject);                
        return (
            <div>
                <TopMenuBar subPage={true} />
                <Container className="linkCollection">                
                <Row>                    
                    <Col style={{margin: `20px`}} xs={12} lg={8}>
                        <ul>
                            {
                                linksObject.social.map((currentLink, index) => (
                                    <ListElement key={index} url={currentLink.url} title={currentLink.title} />
                                ))  
                            }
                        </ul>
                        <ul>
                            {
                                linksObject.city.map((currentLink, index) => (
                                    <ListElement key={index} url={currentLink.url} title={currentLink.title} />
                                ))  
                            }
                        </ul>
                        <ul>
                            {
                                linksObject.travelling.map((currentLink, index) => (
                                    <ListElement key={index} url={currentLink.url} title={currentLink.title} />
                                ))  
                            }
                        </ul>
                        <ul>
                            {
                                linksObject.houseing.map((currentLink, index) => (
                                    <ListElement key={index} url={currentLink.url} title={currentLink.title} />
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
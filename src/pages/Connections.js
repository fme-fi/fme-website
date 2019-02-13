import React, { Component } from 'react';
import { Container, Row, Col } from 'react-flexybox';
import ListElement from './../components/common/ListElement';
import striptags from 'striptags';
import UsefulSidebar from './../components/UsefulSidebar';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import { usefulLinks } from './../helpers/usefulLinks';

class Connections extends Component {    
    render() {        
        let linksObject = JSON.parse(striptags(this.props.links).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"'));
        return (
            <div>                
                <TopMenuBar subPage={true} />
                <Container className="linkCollection">                
                <Row>                    
                    <Col style={{margin: `20px`}} xs={12} lg={8}>
                        <ul>                                                        
                            {
                                linksObject.map((currentLink, index) => (
                                    <ListElement key={index} url={currentLink.url} description={currentLink.desc} title={currentLink.title} />
                                ))  
                            }
                        </ul>                        
                    </Col>                                 
                </Row>                
            </Container>
            <Footer />
            </div>
        )
    }
}

export default Connections;
import React, { Component } from 'react';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import striptags from 'striptags';
import { Container, Row, Col } from 'react-flexybox';

class AboutUs extends Component {    
    render() { 
        return ( 
            <div>
                <TopMenuBar subPage={true} />
                <Container fluid className="aboutUs">
                    <Row center>
                        <Col lg={8}>
                            <h1>
                                Rólunk
                            </h1>
                            <p dangerouslySetInnerHTML={{__html: this.props.content}}>                                
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
         );
    }
}
 
export default AboutUs;
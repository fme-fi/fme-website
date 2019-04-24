import React, { Component } from 'react';
import { Container, Row, Col } from 'react-flexybox';
import ListElement from './../components/common/ListElement';
import striptags from 'striptags';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import { links } from './../helpers/usefulLinks';
import MobileMenuToggle from './../components/common/MobileMenuToggle';
import { connect } from 'react-redux';
import { toggleMobileMenu } from './../store/actions/toggleMobileMenu';

class Connections extends Component {    
    componentDidMount() {
        this.props.onToggleMobileMenu(false);
    }
    render() {        
        let linksObject = null;
        if (process.env.NODE_ENV === 'production') {
            linksObject = links
        } else {
            linksObject = JSON.parse(striptags(this.props.links).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"'))
        }        
        return (
            <div>                
                <TopMenuBar subPage={true} />
                <MobileMenuToggle subPage={true} />    
                <Container className="linkCollection">                
                <Row>                    
                    <Col className="col" xs={12} lg={8}>
                        <ul>                                                        
                            {
                                linksObject ? 
                                linksObject.map((currentLink, index) => (
                                    currentLink && currentLink.desc ?
                                    <ListElement key={index} url={currentLink.url} description={currentLink.desc} title={currentLink.title} />
                                    : <ListElement key={index} url={currentLink.url} description="" title={currentLink.title} />
                                ))
                                : null   
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

const mapStateToProps = state => ({
    isMobileMenuOpen: state.isMobileMenuOpen.isMobileMenuOpen
})

const mapDispatchToProps = dispatch => ({
    onToggleMobileMenu: (isMobileMenuOpen) => dispatch(toggleMobileMenu(isMobileMenuOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
import React, { Component } from 'react';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import { Container, Row, Col } from 'react-flexybox';
import MobileMenuToggle from './../components/common/MobileMenuToggle';
import { connect } from 'react-redux';
import { toggleMobileMenu } from './../store/actions/toggleMobileMenu';
import Management from '../components/common/Management';

class AboutUs extends Component {
    componentDidMount() {
        this.props.onToggleMobileMenu(false);
    }
    render() { 
        return ( 
            <div>
                <TopMenuBar subPage={true} />
                <MobileMenuToggle subPage={true} />
                <Container fluid className="aboutUs">
                    <Row center>
                        <Col xs={10} lg={8}>
                            <h1>
                                Rólunk
                            </h1>
                            <p dangerouslySetInnerHTML={{__html: this.props.content}}>                                
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Management />
                <Footer />
            </div>
         );
    }
}

const mapStateToProps = state => ({
    isMobileMenuOpen: state.isMobileMenuOpen.isMobileMenuOpen
})

const mapDispatchToProps = dispatch => ({
    onToggleMobileMenu: (isMobileMenuOpen) => dispatch(toggleMobileMenu(isMobileMenuOpen))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
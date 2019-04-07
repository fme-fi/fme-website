import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';
import BurgerMenu from './../BurgerMenu';
import { connect } from 'react-redux';
import { toggleMobileMenu } from './../../store/actions/toggleMobileMenu';
import FmeLogo from './../assets/others/logo.svg';
import styled from 'styled-components';

const FmeLogoImage = styled.img`
    max-width: 100px;
    display: flex;
    align-self: center;
    position: relative;
    z-index: 9;
    margin: 18px;
    &:hover {
        pointer: none;
        border: none;        
    }
`;

const MobileWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

class MobileMenuToggle extends Component {
    constructor(props) {
        super(props);        
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
    }

    handleMenuOpen() {                
        this.props.onToggleMobileMenu(!this.props.isMobileMenuOpen)            
    }

    componentDidMount() {
        this.props.onToggleMobileMenu(false);
    }

    render() { 
        let isMobileMenuOpen = this.props.isMobileMenuOpen ? '' : 'hidden';
        let color = this.props.subPage ? '#1C3142' : '#fff'
        return ( 
            <MobileWrapper>
                <Link to="/">
                    <FmeLogoImage src={FmeLogo} />
                </Link>
                <div className="mobileMenuToggle">
                    <FaBars onClick={this.handleMenuOpen} size={32} color={color} />
                </div>
                <div className={`burgerMenuContainer ${isMobileMenuOpen}`}>
                    <BurgerMenu />
                </div>
            </MobileWrapper>
         );
    }
}  

const mapStateToProps = state => ({
    isMobileMenuOpen: state.isMobileMenuOpen.isMobileMenuOpen
})

const mapDispatchToProps = dispatch => ({
    onToggleMobileMenu: (isMobileMenuOpen) => dispatch(toggleMobileMenu(isMobileMenuOpen))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuToggle);
import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import BurgerMenu from './../BurgerMenu';
import { connect } from 'react-redux';
import { toggleMobileMenu } from './../../store/actions/toggleMobileMenu';

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
            <div>
                <div className="mobileMenuToggle">
                    <FaBars onClick={this.handleMenuOpen} size={32} color={color} />
                </div>
                <div className={`burgerMenuContainer ${isMobileMenuOpen}`}>
                    <BurgerMenu />
                </div>
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

 
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuToggle);
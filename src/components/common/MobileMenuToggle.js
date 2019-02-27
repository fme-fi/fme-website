import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import BurgerMenu from './../BurgerMenu';
import { connect } from 'react-redux';
import { toggleMobileMenu } from './../../store/actions/toggleMobileMenu';

class MobileMenuToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
    }

    handleMenuOpen() {
        this.setState({
            isMenuOpen: true
        })
        //test reducer
        this.props.onToggleMobileMenu(!this.props.isMobileMenuOpen)
        console.log(this.props.isMobileMenuOpen)
    }

    render() { 
        let isMobileMenuOpen = this.state.isMenuOpen ? '' : 'hidden';
        return ( 
            <div>
                <div className="mobileMenuToggle">
                    <FaBars onClick={this.handleMenuOpen} size={32} color="#ffffff" />
                </div>
                <div className={`burgerMenuContainer ${isMobileMenuOpen}`}>
                    <BurgerMenu />
                </div>
            </div>
         );
    }
}  

const mapStateToProps = state => ({
    isMobileMenuOpen: state.isMobileMenuOpen
})

const mapDispatchToProps = dispatch => ({
    onToggleMobileMenu: (isMobileMenuOpen) => dispatch(toggleMobileMenu(isMobileMenuOpen))
})

 
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuToggle);
import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import BurgerMenu from './../BurgerMenu';

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
 
export default MobileMenuToggle;
import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

class BurgerMenu extends Component {    
    render() {         
        return ( 
            <div className={`burgerMenu`}>
                <div className="closeContainer">
                    <FaTimes size={32} color="#1C3142" />
                </div>
                <ul>
                    <li className="active">
                        <a href="#">
                            hello
                        </a>
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default BurgerMenu;
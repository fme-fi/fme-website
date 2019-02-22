import React, { Component } from 'react';

class BurgerMenu extends Component {    
    render() {         
        return ( 
            <div className={`burgerMenu`}>
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
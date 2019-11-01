import React, { Component } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa/'

class MemberShipFee extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="membershipFeeContainer">
                <p>
                    <FaExclamationTriangle size="2.1em" />
                    Amennyiben egyesületi tag szeretne lenni, olvassa el tájékoztatónkat <a ref={element => {
                        if (element) {
                            element.style.setProperty('color', '#fff', 'important')
                        }
                    }} href="/magunkrol"> itt</a>
                </p>
            </div>
         );
    }
}
 
export default MemberShipFee;
import React, { Component } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa/'
import Icon from 'react-icons-kit'
import {x} from 'react-icons-kit/feather/x'

class MemberShipFee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isNotificationBarHidden: false,
         }
    }
    hideNotificationBar() {
        window.localStorage.setItem('isNotificationBarHidden', true)
        this.setState({
            isNotificationBarHidden: true,
        })
    }
    componentDidMount() {
        const isNotificationBarHidden = window.localStorage.getItem('isNotificationBarHidden') || false
        this.setState({
            isNotificationBarHidden
        }, () => {
            console.debug('state', this.state)
        })
    }
    render() { 
        return ( 
            <div style={this.state.isNotificationBarHidden ? {display: 'none'} : {}} className="membershipFeeContainer">
                <p>
                    <FaExclamationTriangle size="2.1em" />
                    Amennyiben egyesületi tag szeretne lenni, olvassa el tájékoztatónkat <a ref={element => {
                        if (element) {
                            element.style.setProperty('color', '#fff', 'important')
                        }
                    }} href="/magunkrol"> itt</a>
                </p>
                <div className="hideNotification" onClick={() => this.hideNotificationBar()} style={{color: '#fff'}}>
                    <Icon icon={x} size="2em" />
                </div>
            </div>
         );
    }
}
 
export default MemberShipFee;
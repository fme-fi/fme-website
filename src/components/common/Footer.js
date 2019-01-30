import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from './../assets/others/foreground.png';
import Deer from './../assets/others/deer_brown.gif';
import { VelocityComponent } from 'velocity-react';
import PastEvents from './PastEvents';
const BackgroundImageContainer = styled.div``;

class Footer extends Component {    
    constructor(props) {
        super(props)
        
    }
    render() {
        
        return (
            <div>
                <div className="pastEventsContainer">
                    <PastEvents />
                </div>
                <VelocityComponent runOnMount={true} animation={{backgroundPositionX: "10000%"}} easing="linear" duration={45e5}>
                    <div style={{
                        backgroundImage: `url(${backgroundImage})`,
                        
                    }} className="footerContainer">
                        <BackgroundImageContainer />                
                        <img className="deer" src={Deer} />
                    </div>
                </VelocityComponent>
            </div>            
        )
    }
}

export default Footer;
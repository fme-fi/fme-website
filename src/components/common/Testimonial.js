import React, { Component } from 'react';
import Me from './../assets/others/me.png';

class Testimonial extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="oneTestimonal">                
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="authorWrapper">
                <div>                    
                    <p>
                        {
                            this.props.name
                        }
                    </p>
                    <p>
                        Espoo, Finland
                    </p>                    
                </div>
                <div>
                    <img src={Me} />
                </div>  
                </div>   
            </div>
        )
    }
}

export default Testimonial;
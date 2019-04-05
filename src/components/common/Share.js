import React, { Component } from 'react';
import { FaFacebookF, FaBookmark, FaMapPin } from 'react-icons/fa';

class Share extends Component {
    
    render() {
        return(
            <div className="shareContainer">            
            <ul>
                {
                    this.props.excerpt ? 
                        <li>
                        <FaMapPin size="1.5em" color={"#1C3142"} /> <span>
                            {this.props.excerpt.location}
                        </span>
                    </li>
                    : null 
                }
            </ul>
                <ul>
                    <li>
                        <FaFacebookF size="1.5em" color={"#1C3142"} />
                    </li>
                    <li>
                        <FaBookmark size="1.5em" color={"#1C3142"} />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Share;
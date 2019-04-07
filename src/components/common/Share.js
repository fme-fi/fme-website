import React, { Component } from 'react';
import { FaFacebookF, FaBookmark, FaMapPin } from 'react-icons/fa';
import { FacebookShareButton } from 'react-share';

class Share extends Component {    
    render() {
        console.log("props", this.props)
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
                        <FacebookShareButton quote={this.props.postTitle} url={`${process.env.GATSBY_FME_WP_SITE_URL}/${this.props.thisLink}`}>
                            <FaFacebookF size="1.5em" color={"#1C3142"} />
                        </FacebookShareButton>
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
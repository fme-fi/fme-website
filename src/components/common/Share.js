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
                    {
                    this.props.excerpt && this.props.excerpt.fbevent ?
                        <li>
                            <a target="_blank" href={this.props.excerpt.fbevent}>
                                <FaFacebookF size="1.5em" color={"#1C3142"} />
                            </a>
                        </li>
                    : null
                    }
                    <li>
                        <FaBookmark size="1.5em" color={"#1C3142"} />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Share;
import React, { Component } from 'react';

class UpcomingEventCards extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        console.log(this.props.businessRules)
        return (
            <div style={{backgroundImage: `url(${this.props.featuredImage})`}} className="eventCard">
                <h1>
                    {
                        this.props.title
                    }
                </h1>
            </div>
        )
    }
}

export default UpcomingEventCards;
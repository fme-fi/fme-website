import React, { Component } from 'react';

class UpcomingEventCards extends Component {
    constructor(props) {
        super(props);        
    }

    render() {        
        return (
            <div style={{backgroundImage: `url(${this.props.featuredImage})`}} className="eventCard">
                <p>
                   {this.props.businessRules.date} 
                </p>
                <h1 dangerouslySetInnerHTML={{__html: this.props.title}}>                    
                </h1>
            </div>
        )
    }
}

export default UpcomingEventCards;
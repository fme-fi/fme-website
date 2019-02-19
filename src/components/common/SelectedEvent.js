import React, { Component } from 'react';

class SelectedEvent extends Component {
    constructor(props) {
        super(props);                        
    }
    render() {         
        let thisEventDate = new Date(this.props.selectedEvent.start)
        return ( 
            <div className="selectedEvent">
                <div style={{backgroundImage: `url(${this.props.selectedEvent.featuredImage})`}} className="featuredImage"></div>
                <div className="eventContainer">
                    <div>
                        <p>
                            <span>
                                {thisEventDate.toLocaleString('hu-hu', { month: 'short' })}
                            </span>
                            {thisEventDate.getDay()}
                        </p>
                    </div>
                    <div>
                        <p>
                            {this.props.selectedEvent.title}
                        </p>
                        <p>
                        {`Felelős: ${this.props.selectedEvent.responsible}`}
                        </p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SelectedEvent;
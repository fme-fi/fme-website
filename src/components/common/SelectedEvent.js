import React, { Component } from 'react';
import { FaMapPin, FaClock } from 'react-icons/fa';

class SelectedEvent extends Component {
    render() {         
        let thisEventDate = new Date(this.props.selectedEvent.date)        
        return ( 
            <div className="selectedEvent">
                <div style={{backgroundImage: `url(${this.props.selectedEvent.featuredImage})`}} className="featuredImage">
                    <div>
                        <p>
                            {this.props.selectedEvent.title}                    
                        </p>
                        <div>                        
                            <p>
                            {`Felelős: ${this.props.selectedEvent.responsible}`}
                            </p>
                        </div>
                    </div>                
                    <div>                        
                        <p>
                            <FaMapPin size="1em" color="#fff" /> {this.props.selectedEvent.location}
                        </p>
                        <p>
                            <FaClock size="1em" color="#fff" /> {`${thisEventDate.toLocaleString('hu-hu', { month: 'long' })} ${thisEventDate.getDay()}` } 
                        </p>
                    </div>
                </div>                
            </div>
         );
    }
}
 
export default SelectedEvent;
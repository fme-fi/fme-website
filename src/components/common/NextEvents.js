import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { wordpressIds } from './../../postIds';
import Calendar from 'react-calendar';

class NextEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }

        this.onChange = this.onChange.bind(this);

      } 

      onChange(selectedDate) {
          console.log(selectedDate);
      }
      
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query upComingEventsQuery {
                        allWordpressPage(filter: { wordpress_parent: {eq: 617} }) {
                            edges {
                            node {
                                id
                                title
                                content
                                excerpt
                                date
                                modified
                                slug
                                status          
                                featured_media {
                                    id
                                    source_url
                                    }                      
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <div className="nextEventsContainer">
                            <Calendar className="calendar"
                            onChange={(value) => this.onChange(value)}
                            value={this.state.date}
                            />                      
                    </div>                    
                )}
                />
        )
    }
}

export default NextEvents;
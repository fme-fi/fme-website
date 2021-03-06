import React, { Component } from 'react';
import striptags from 'striptags';

class Pagination extends Component {    
    render() {        
        return (
            <div className="paginationContainer">
                {
                    this.props.pagination.prev.slug !== "" ? 
                    <div className="goBack">
                        <a href={`/blog/${this.props.pagination.prev.slug}`}>
                            <p>
                                {
                                    striptags(this.props.pagination.prev.title).replace('&nbsp;', ' ')
                                }
                            </p>
                        </a>
                    </div>
                    : null
                }
                {
                    this.props.pagination.next.slug !== "" ? 
                    <div className="goForward">
                    <a href={`/blog/${this.props.pagination.next.slug}`}>
                            <p>
                                {
                                    striptags(this.props.pagination.next.title).replace('&nbsp;', ' ')
                                }
                            </p>
                        </a>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default Pagination
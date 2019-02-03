import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import striptags from 'striptags';

class Pagination extends Component {    
    render() {
        console.log(this.props.pagination);
        return (
            <div className="paginationContainer">
                {
                    this.props.pagination.prev.slug !== "" ? 
                    <div>
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
                    <div>
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
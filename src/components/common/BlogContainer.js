import React, { Component } from 'react';
import Share from './Share';
import Pagination from './Pagination.js';

class BlogContainer extends Component {
    render() {
        return(
            <div className="blogContentContainer">
                <Share />
                <p dangerouslySetInnerHTML={{ __html: this.props.content }} />
                <Pagination pagination={this.props.pagination} />
            </div>                           
        )
    }
}

export default BlogContainer;
import React, { Component } from 'react';

class BlogContainer extends Component {
    render() {
        return(
            <div className="blogContentContainer">
                <p dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </div>                           
        )
    }
}

export default BlogContainer;
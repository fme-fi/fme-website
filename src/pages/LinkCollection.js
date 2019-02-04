import React, { Component } from 'react';

class LinkCollection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return(
            <div>
                <h1>
                    {this.props.children}
                </h1>
            </div>
        )
    }
}

export default LinkCollection;
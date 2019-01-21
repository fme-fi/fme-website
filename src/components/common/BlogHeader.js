import React, { Component } from 'react';
import styled from 'styled-components';


const BlogHeaderWrapper = styled.div``;

const BlogFeaturedImage = styled.img``;

const BlogMeta = styled.div``;

class BlogHeader extends Component {
    render() {
        return(
            <BlogHeaderWrapper>
                <BlogFeaturedImage>

                </BlogFeaturedImage>
                <BlogMeta>
                    {this.props.blogTitle}
                </BlogMeta>
            </BlogHeaderWrapper>
        )
    }
}


export default BlogHeader;
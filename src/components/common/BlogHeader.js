import React, { Component } from 'react';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';

const BlogHeaderWrapper = styled.div``;
const BlogFeaturedImage = styled.img``;
const BlogMeta = styled.div``;

class BlogHeader extends Component {
    render() {
        return(
            <Parallax
            blur={0}
            bgImage={this.props.featuredImage}            
            strength={600} 
            bgClassName="parallaxBlogHeader"     
            contentClassName="parallaxContentBlogHeader"                  
            >            
            <BlogHeaderWrapper className="blogHeaderWrapper">                
                    <BlogMeta className="blogMeta">
                        <h1>
                            {this.props.blogTitle}
                        </h1>
                    </BlogMeta>
                </BlogHeaderWrapper>
            </Parallax>      
        )
    }
}


export default BlogHeader;
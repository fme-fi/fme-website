import React, { Component } from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import { Clock, User } from 'react-feather';
import { users } from './../../helpers/userFullnames';

const BlogHeaderWrapper = styled.div``;
const BlogMeta = styled.div``;

const PostAuthor = (props) => {
    return ( 
        <span>
            <User /> {props.author}
        </span>
     );
}

class BlogHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postAuthor: null,            
        };

    }    
    render() {
        
        let thisPostAuthor = this.props.author
        let currentAuthor = users.find(function(element) {
            return element.author === thisPostAuthor;
        });

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
                    <div className="authorContainer">
                        <div>
                            <p>
                                <span>
                                {
                                    currentAuthor && !this.props.excerpt ? 
                                        <PostAuthor author={currentAuthor.fullName} />
                                    : null
                                }
                                </span> 
                                <span>
                                {
                                    this.props.postDate && !this.props.excerpt ? 
                                    <>
                                        <Clock /> <span dangerouslySetInnerHTML={{__html: this.props.postDate}}></span>
                                    </>
                                    : 
                                    <>
                                        <Clock /> <span dangerouslySetInnerHTML={{__html: this.props.excerpt.date}}></span>
                                    </>
                                }
                                </span>
                            </p>
                        </div>
                    </div>
                </BlogHeaderWrapper>
            </Parallax>
        )
    }
}


export default BlogHeader;
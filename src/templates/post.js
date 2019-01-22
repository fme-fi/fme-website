import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import striptags from 'striptags';
import BlogContainer from './../components/common/BlogContainer'
import BlogHeader from './../components/common/BlogHeader';


const PostTemplate = (props) => {
  const { data: { wordpressPost: post } } = props;
  return (
    
      <div>
        <Helmet
        title={post.title}
        meta={[
          { name: 'description', content: post.excerpt },
        ]}
      />      
      <article>
        <header>
          <BlogHeader blogTitle={striptags(post.title).replace('&nbsp;', ' ')} featuredImage={post.jetpack_featured_media_url} />
        </header>
          <BlogContainer content={post.content} />                    
      </article>
      </div>
    
  );
};
PostTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
};
export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        content
        excerpt
        date(formatString: "DD, MMM YYYY")                        
        slug
        jetpack_featured_media_url
    }
  }
`;
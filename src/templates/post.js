import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import striptags from 'striptags';
import BlogContainer from './../components/common/BlogContainer'
import BlogHeader from './../components/common/BlogHeader';
import { Container, Row, Col } from 'react-flexybox';
import defaultFeaturedImage from './../components/assets/others/default_featured_image.jpg';
import './../style/Site.scss';
import Share from './../components/common/Share';
import Pagination from './../components/common/Pagination';
import TopMenuBar from './../components/common/TopMenuBar';

const PostTemplate = (props) => {
  const { data: { wordpressPost: post } } = props;      
  return (
    <Container fluid>
      <TopMenuBar subPage={true} />
      <div>
        <Helmet
          title={post.title}
          meta={[
            { name: 'description', content: post.excerpt },
          ]}
        />      
       <article>
        <header>
          {
            !post.featured_media ? 
              <BlogHeader postDate={post.date} author={post.author.name} blogTitle={striptags(post.title).replace('&nbsp;', ' ')} featuredImage={defaultFeaturedImage} />
            : <BlogHeader postDate={post.date} author={post.author.name} blogTitle={striptags(post.title).replace('&nbsp;', ' ')} featuredImage={post.featured_media.source_url} />
          }
        </header>
        <div className="blogContentContainer">
                <Share />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <Pagination pagination={props.pageContext.pagination} />
          </div>             
        </article>
      </div> 
    </Container>         
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
        featured_media {
          id
          source_url
        }
        author {
          name
        }
        wordpress_id
    }
  }
`;
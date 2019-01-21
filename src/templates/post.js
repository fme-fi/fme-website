import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import BlogHeader from './../components/common/BlogHeader';
import striptags from 'striptags';

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
        <section className="container-fluid main-body">
          <section className="row">
            <div className="hidden-xs col-sm-1 col-md-2" />
            <div className="col-xs-12 col-sm-10 col-md-8">
              <div className="content-holder">
                <div className="content-description">                                                      
                  <div className="row blog-info">                    
                    <div className="col-xs-12 col-sm-6">
                      <span className="lead text-muted">
                        <i className="fa fa-tags" />
                        {post.categories && post.categories.map(category => category.name)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content-body">
                  <p dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>
            </div>            
          </section>
        </section>
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
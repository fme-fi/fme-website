import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import LinkCollection from './../pages/LinkCollection';
import { wordpressIds } from './../postIds';

const PageTemplate = (props) => {
  const { data: { wordpressPage: page } } = props;
  
  const Layout = LinkCollection;
  console.log(page.wordpress_id);
  return (
    page.wordpress_id === wordpressIds.usefulStuff ? 
    <div>
        <LinkCollection links={page.content}>
            {page.title}                        
        </LinkCollection>
    </div>
    : null
  );
};
PageTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
};
export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
        title
        content
        excerpt
        date(formatString: "DD, MMM YYYY")                        
        slug
        id
        wordpress_id
    }
  }
`;
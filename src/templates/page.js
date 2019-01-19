import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';

const PageTemplate = (props) => {
  const { data: { wordpressPage: page } } = props;
  return (
    <div>
        {page.title}
    </div>
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
    }
  }
`;
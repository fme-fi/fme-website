import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import LinkCollection from './../pages/LinkCollection';
import { wordpressIds } from './../postIds';
import BasicMap from './../pages/Events';
import AboutUs from './../pages/AboutUs';
import Archive from './../pages/Archive';
import Connections from './../pages/Connections';
import EventPageTemplate from './eventPage';

const PageTemplate = (props) => {
  const { data: { wordpressPage: page } } = props;  
  const Layout = LinkCollection;  

  return (
    page.wordpress_id === wordpressIds.usefulStuff ? 
    <div>
        <LinkCollection links={page.content}>
            {page.title}                        
        </LinkCollection>
    </div>
    : page.wordpress_id === wordpressIds.events ?
      <BasicMap />
    : page.wordpress_id === wordpressIds.aboutUs ?
      <AboutUs content={page.content} />
    : page.wordpress_id === wordpressIds.archive ?
      <Archive />
    : page.wordpress_id === wordpressIds.connections ?
      <Connections links={page.content}>
        {page.title}
      </Connections>
    : <EventPageTemplate post={page} />
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
        author {
          name
        }
        featured_media {
          id
          source_url
        }
    }
  }
`;

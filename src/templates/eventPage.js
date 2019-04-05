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

const EventPageTemplate = (props) => {  
const post = props.post;
const excerpt = JSON.parse(striptags(post.excerpt).replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&#038;#8221;/g, '"'))
  return (
    <Container fluid>
      <TopMenuBar subPage={true} />
      <div>
        <Helmet
          title={post.title}
          meta={[
            { name: 'description', content: post.title },
          ]}
        />      
       <article>
        <header>
          {
            !post.featured_media ? 
              <BlogHeader excerpt={excerpt} postDate={post.date} author={post.author.name} blogTitle={striptags(post.title).replace('&nbsp;', ' ')} featuredImage={defaultFeaturedImage} />
            : <BlogHeader excerpt={excerpt} postDate={post.date} author={post.author.name} blogTitle={striptags(post.title).replace('&nbsp;', ' ')} featuredImage={post.featured_media.source_url} />
          }
        </header>                   
        <div className="blogContentContainer">
            <Share excerpt={excerpt} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div> 
    </Container>         
  );
};

export default EventPageTemplate;

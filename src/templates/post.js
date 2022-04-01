import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import striptags from 'striptags';
import BlogHeader from './../components/common/BlogHeader';
import { Container } from 'react-flexybox';
import defaultFeaturedImage from './../components/assets/others/default_featured_image.jpg';
import './../style/Site.scss';
import Share from './../components/common/Share';
import Pagination from './../components/common/Pagination';
import TopMenuBar from './../components/common/TopMenuBar';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/scss/image-gallery.scss"

const PostTemplate = (props) => {
  const { data: { wordpressPost: post } } = props;
  const [allImages, setImages] = useState(null)
  useEffect(() => {
    const images = []
    const gallery = document.getElementsByClassName('blocks-gallery-grid')[0]
    if (gallery) {
      const galleryImages = gallery.querySelectorAll('li')
      galleryImages.forEach(currImage => {
        const currentSrc = currImage.querySelectorAll('img')[0].attributes.src.value
        // console.debug('currentSrc', currentSrc)
        images.push({
          original: currentSrc,
          thumbnail: currentSrc,
        })
      })
      console.debug('allImages', images)
      setImages(images)
      gallery.remove()
    }
  }, [])

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
              <BlogHeader postDate={post.date} author={post.author.name} blogTitle={striptags(post.title).replace('&nbsp;', ' ')} featuredImage={defaultFeaturedImage} />
            : <BlogHeader postDate={post.date} author={post.author.name} blogTitle={striptags(post.title).replace('&nbsp;', ' ')} featuredImage={post.featured_media.source_url} />
          }
        </header>
        <div className="blogContentContainer">
                <Share postTitle={post.title} thisLink={`/blog/${post.slug}`} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                {
                  allImages
                  ? ( <div className="galleryContainer">
                        <ImageGallery items={allImages} />
                      </div>
                  )
                  : null
                }
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
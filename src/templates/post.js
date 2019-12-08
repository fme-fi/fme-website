import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { useStore, useDispatch } from 'react-redux'
import striptags from 'striptags';
import BlogHeader from './../components/common/BlogHeader';
import { Container } from 'react-flexybox';
import defaultFeaturedImage from './../components/assets/others/default_featured_image.jpg';
import './../style/Site.scss';
import Share from './../components/common/Share';
import Pagination from './../components/common/Pagination';
import TopMenuBar from './../components/common/TopMenuBar';
import GalleryItem from '../components/common/GalleryItem';
import Modal from 'react-modal';
import { toggleBlur } from '../store/actions/toggleBlur'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const PostTemplate = (props) => {
  const { data: { wordpressPost: post } } = props;
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, toggleModal] = useState(false)
  const store = useStore()
  const dispatch = useDispatch()
  useEffect(() => {
    const gallery = document.getElementsByClassName('blocks-gallery-grid')[0]
    const galleryImages = gallery.querySelectorAll('li')
    galleryImages.forEach(currImage => {
      currImage.addEventListener('click', e => {
        toggleModal(true)
        dispatch(toggleBlur(true))
        setSelectedImage(e.target.src)
      })
    })
    
  }, [])

  function handleGalleryClose () {
    dispatch(toggleBlur(false))
    toggleModal(false)
  }
  return (
    <Container fluid>
      <TopMenuBar subPage={true} />
      <div
        style={ store.getState().blur.blur ? { filter: 'blur(10px)'} : {} }
      >
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
                <Pagination pagination={props.pageContext.pagination} />
          </div>
        </article>
      </div>
      <Modal
          isOpen={isModalOpen}
          onAfterOpen={() => console.debug('open')}
          onRequestClose={() => handleGalleryClose()}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="imageGalleryOverlay"
        >
            <GalleryItem src={selectedImage} />
      </Modal>
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
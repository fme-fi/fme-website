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
import { ARROW_LEFT, ARROW_RIGHT } from '../utils/consts'

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
  const [keyCounter, setKeyCounter] = useState(0)
  const store = useStore()
  const dispatch = useDispatch()
  useEffect(() => {
    Modal.setAppElement(document.getElementById("___gatsby"))
    const gallery = document.getElementsByClassName('blocks-gallery-grid')[0]
    if (gallery) {
      const galleryImages = gallery.querySelectorAll('li')
      let keyC = 0
      galleryImages.forEach(currImage => {
        currImage.addEventListener('click', e => {
          toggleModal(true)
          dispatch(toggleBlur(true))
          setSelectedImage(e.target.src)
        })
      })
      document.addEventListener('keydown', function(event) {
          if (event.key === ARROW_LEFT) {
            keyC = keyC - 1
            galleryImages.forEach((currImage, index) => {
              if (index === keyC) {
                const currentSrc = currImage.querySelectorAll('img')[0].attributes.src.value;
                setSelectedImage(currentSrc)
              }
            })
          } else if (event.key === ARROW_RIGHT) {
            keyC = keyC + 1
            galleryImages.forEach((currImage, index) => {
              if (index === keyC) {
                const currentSrc = currImage.querySelectorAll('img')[0].attributes.src.value;
                setSelectedImage(currentSrc)
              }
            })
          }
      })
    }
  }, [])

  function handleGalleryClose () {
    dispatch(toggleBlur(false))
    toggleModal(false)
    setSelectedImage(null)
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
          onAfterOpen={() => null}
          onRequestClose={() => handleGalleryClose()}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName="imageGalleryOverlay"
          className="galleryModal"
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
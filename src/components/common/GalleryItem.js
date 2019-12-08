import React from 'react'

/**
* @author zilahir
* @function Gallery
**/

const Gallery = props => {
    const { src } = props
  return(
    <div className="galleryItem">
        <img src={src} alt="image" />
    </div>
   )
}

export default Gallery
import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => (
  <ul className="gallery">
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
    ))}
  </ul>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;

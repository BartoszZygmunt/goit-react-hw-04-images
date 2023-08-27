import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="gallery-item" onClick={() => onClick(image)}>
    <img src={image.webformatURL} alt="" />
  </li>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

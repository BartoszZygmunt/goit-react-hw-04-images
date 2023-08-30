import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="gallery-item" onClick={() => onClick(image)}>
    <img src={image.webformatURL} alt="" />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

import React from 'react';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className="gallery-item">
      <img className="gallery-item--image" src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;

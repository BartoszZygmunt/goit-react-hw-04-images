import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="gallery-item" onClick={() => onClick(image)}>
    <img src={image.webformatURL} alt="" />
  </li>
);

export default ImageGalleryItem;

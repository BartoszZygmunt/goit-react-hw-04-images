import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <ul className="gallery">
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
    ))}
  </ul>
);

export default ImageGallery;

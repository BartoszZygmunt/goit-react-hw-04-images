import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
//import PropTypes from 'prop-types';

import Searchbar from './SearchBar.jsx';
import ImageGallery from './ImageGallery.jsx';
import Button from './Button.jsx';
import Loader from './Loader.jsx';
import Modal from './Modal.jsx';

const API_KEY = '21202878-7eed95eba93d8479640dfcfe2';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const fetchImages = useCallback(() => {
    setIsLoading(true);

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      })
      .catch(error => console.error(error))
      .finally(() => {
        setIsLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }, [query, page]);

  useEffect(() => {
    if (query === '') return;
    fetchImages();
  }, [query, page, fetchImages]);

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setShowModal(true);
    setSelectedImage(image.largeImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal onClose={handleCloseModal} largeImageURL={selectedImage} />
      )}
    </div>
  );
}

export default App;

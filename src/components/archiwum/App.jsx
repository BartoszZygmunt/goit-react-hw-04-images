//plik APP.JSX:

import React, { Component } from 'react';
import Searchbar from './SearchBar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';

class App extends Component {
  state = {
    images: [], //zdjęcia z API
    query: '',
    page: 1, // Numer strony z wynikami
  };

  handleSearch = query => {
    const apiKey = '21202878-7eed95eba93d8479640dfcfe2';
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    //wyczyść tablicę i wróc na page=1
    //this.setState({ images: [], page: 1 });

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Wystąpił błąd sieciowy');
        }
        return response.json();
      })
      .then(data => {
        console.log('Wyniki zapytania:', data);

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch(this.state.query)} />
        <ImageGallery>
          {this.state.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
            />
          ))}
        </ImageGallery>
        {this.state.images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;

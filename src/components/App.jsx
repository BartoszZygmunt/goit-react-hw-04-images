import React, { Component } from 'react';
import Searchbar from './SearchBar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';

class App extends Component {
  state = {
    images: [], // Tutaj przechowujemy wyniki z API
  };

  handleSearch = query => {
    const apiKey = '21202878-7eed95eba93d8479640dfcfe2';
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Wystąpił błąd sieciowy');
        }
        return response.json();
      })
      .then(data => {
        // Tutaj możesz przekazać wyniki zapytania do swojego komponentu nadrzędnego lub przetworzyć dane inaczej
        console.log('Wyniki zapytania:', data);
        this.setState({ images: data.hits });
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery>
          {this.state.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
            />
          ))}
        </ImageGallery>
      </div>
    );
  }
}

export default App;

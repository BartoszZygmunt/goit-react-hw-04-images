//Plik SerchBar.jsx:

import React, { Component } from 'react';

class Searchbar extends Component {
  // state = {
  //   query: '', // Lokalny stan do przechowywania wprowadzonych danych
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { query } = this.state; // Pobieramy wartość z lokalnego stanu
  //   this.props.onSubmit(query); // Przekazujemy wartość do rodzica
  //   console.log(`To jest Query z SearchBar: ${query}`);
  // };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

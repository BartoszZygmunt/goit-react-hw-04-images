import React from 'react';

const Button = ({ onClick }) => (
  <div className="buttonMoreContainer">
    <button type="button" className="buttonMore" onClick={onClick}>
      Load more
    </button>
  </div>
);

export default Button;

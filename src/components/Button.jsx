import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <div className="buttonMoreContainer">
    <button type="button" className="buttonMore" onClick={onClick}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;

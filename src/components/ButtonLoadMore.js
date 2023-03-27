import React from 'react';
import PropTypes from 'prop-types';

// import { ButtonCss } from './Button.styled';

function ButtonLoadMore ({ onClick }) {
  return (
    <button type="button" onClick={onClick}  className="Button">
      Loadmore
    </button>
  );
}

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
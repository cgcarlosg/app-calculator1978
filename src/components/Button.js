import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (

  <>
    <button type="button">{name}</button>
  </>
);

Button.propTypes = {
  result: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button
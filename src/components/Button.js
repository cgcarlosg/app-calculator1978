import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (

  React.createElement('button', { type: 'button' }, name)
);

Button.propTypes = {
  result: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button
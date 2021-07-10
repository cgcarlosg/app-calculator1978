import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div>
    {name}
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div>
    {name}
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  name: '',
};

export default Button
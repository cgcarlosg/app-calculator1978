import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ name, clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <>
      <button type="button" name={name} onClick={(event) => handleClick(event.target.name)}>{name}</button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};

export default Button;

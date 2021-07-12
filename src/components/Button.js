import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ name, clickHandler, num }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  return (
    <>
      <button type="button" className={`btn btn${num}`} name={name} onClick={event => handleClick(event.target.name)}>{name}</button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
};

Button.defaultProps = {
  name: '',
};

export default Button;

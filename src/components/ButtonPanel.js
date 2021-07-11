import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };
  const group = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  return (
    <>
      {group.map((elem) => (
            <div key={elem.toString()}>
          {elem.map((btn) => (
     <Button key={btn} name={btn} clickHandler={handleClick} />
          ))}
        </div>
      ))}
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

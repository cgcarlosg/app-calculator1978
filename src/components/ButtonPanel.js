import React from 'react';

const ButtonPanel = () => {
  const group = [['AC', '+/-', '%', '÷'], [7, 8, 9, 'X'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']];

  return (
    <>
      {group.map(elem => (
        <div key={elem.id}>
          {elem.map(btn => (
            React.createElement('button', { type: 'button' }, btn)
          ))}
        </div>
      ))}
    </>
  );
};

export default ButtonPanel;
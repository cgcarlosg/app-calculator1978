import '../styles/App.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const result = calculate(calculation, buttonName);
    setCalculation({ ...result });
  };

  return (
    <>
      <div className="App">
        <div className="App-calculator">
          <Display
            total={calculation.total}
            next={calculation.next}
            operation={calculation.operation}
          />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

export default App;

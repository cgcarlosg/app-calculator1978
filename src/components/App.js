import './App.css';
import React, { useState } from 'react';
import Display from './Display';
import calculate from '../logic/calculate';
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

  const result = calculation;

  return (
    <>
      <div className="App">
        <header className="App-header">
       <Display result={result} />
          <ButtonPanel clickHandler={handleClick} />
        </header>
      </div>
    </>
  );
}

export default App;

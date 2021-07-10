import './App.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const result = calculate(calculation, buttonName);
    setCalculation(result);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Display result={calculation} />
        <ButtonPanel clickHandler={handleClick} />
      </header>
    </div>
  );
}

export default App;
